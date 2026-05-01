"use strict";

const axios = require("axios");
const FormData = require("form-data");

/**
 * Vimeo numeric id from common URL shapes (watch links, embed, channels, groups).
 */
function extractVimeoId(link) {
  if (!link || typeof link !== "string") return null;
  const match = link.match(
    /vimeo\.com\/(?:channels\/[^/]+\/|groups\/[^/]+\/videos\/|video\/)?(\d+)/i
  );
  return match ? match[1] : null;
}

/**
 * Download remote image and POST to Strapi upload; returns media file id or null.
 */
async function fetchAndUploadSocialImage(imageUrl, videoId) {
  if (!imageUrl || !process.env.API_URL || !process.env.STRAPI_TOKEN) {
    strapi.log.warn(
      "[sermon lifecycle] Missing API_URL or STRAPI_TOKEN; skipping thumbnail upload."
    );
    return null;
  }

  let buffer;
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    buffer = Buffer.from(response.data);
  } catch (error) {
    strapi.log.error(
      "[sermon lifecycle] Thumbnail download failed:",
      error.message
    );
    return null;
  }

  const form = new FormData();
  form.append("files", buffer, {
    filename: `sermon-${videoId}.jpg`,
    contentType: "image/jpeg",
  });

  try {
    const { data } = await axios.post(
      `${process.env.API_URL.replace(/\/$/, "")}/api/upload`,
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      }
    );

    const list = Array.isArray(data) ? data : data?.data;
    const uploaded = Array.isArray(list) ? list[0] : list;
    return uploaded?.id ?? null;
  } catch (error) {
    strapi.log.error(
      "[sermon lifecycle] Upload failed:",
      error.response?.data ?? error.message
    );
    return null;
  }
}

async function populateAudioUrl(data) {
  if (!data.Audio) return;

  const details = await strapi.entityService.findOne(
    "plugin::upload.file",
    data.Audio,
    { fields: ["url"] }
  );

  if (details?.url) {
    data.AudioURL = details.url;
  }
}

async function attachVimeoThumbnail(data) {
  if (!data.Link || data.Image) return;

  const videoId = extractVimeoId(data.Link);
  if (!videoId) {
    strapi.log.warn("[sermon lifecycle] Could not parse Vimeo id from Link.");
    return;
  }

  try {
    const { data: vimeoPayload } = await axios.get(
      `https://vimeo.com/api/v2/video/${videoId}.json`
    );
    const thumbUrl = vimeoPayload?.[0]?.thumbnail_large;
    const imageId = await fetchAndUploadSocialImage(thumbUrl, videoId);

    if (imageId) {
      data.VideoID = String(videoId);
      data.Image = imageId;
    }
  } catch (error) {
    strapi.log.error(
      "[sermon lifecycle] Vimeo API failed:",
      error.response?.data ?? error.message
    );
  }
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    await populateAudioUrl(data);
    await attachVimeoThumbnail(data);
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    await populateAudioUrl(data);
    await attachVimeoThumbnail(data);
  },
};
