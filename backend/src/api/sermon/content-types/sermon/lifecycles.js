const axios = require("axios");
const FormData = require("form-data");

async function fetchAndUploadSocialImage(img, videoId) {
  const response = await axios.get(img, {
    responseType: "arraybuffer",
  });

  const form = new FormData();
  form.append("files", response.data, `sermon-${videoId}.jpg`);

  const upload = await axios
    .post(`${process.env.API_URL}/api/upload`, form, {
      headers: {
        Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
      },
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });

  return upload;
}

module.exports = {
  async beforeCreate({ params }) {
    const { data } = params;

    // Populate audio link
    if (data.Audio) {
      const details = await strapi.entityService.findOne(
        "plugin::upload.file",
        data.Audio,
        { fields: ["url"] }
      );

      data.AudioURL = details.url;
    }

    // Populate thumbnail
    if (data.Link && !data.Image) {
      const videoId = data.Link.match(
        /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(grou1ps\/[A-z]+\/videos\/))?([0-9]+)/
      )[5];

      const vimeo = await axios.get(
        `https://vimeo.com/api/v2/video/${videoId}.json`
      );
      const vimeoData = await vimeo.data;

      const thumbnail = await fetchAndUploadSocialImage(
        vimeoData[0]?.thumbnail_large,
        videoId
      );

      data.VideoID = videoId;
      data.Image = thumbnail.data;
    }
  },

  async beforeUpdate({ params }) {
    const { data } = params;

    // Populate audio link
    if (data.Audio) {
      const details = await strapi.entityService.findOne(
        "plugin::upload.file",
        data.Audio,
        { fields: ["url"] }
      );

      data.AudioURL = details.url;
    }

    // Populate thumbnail
    if (data.Link && !data.Image) {
      const videoId = data.Link.match(
        /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(grou1ps\/[A-z]+\/videos\/))?([0-9]+)/
      )[5];

      const vimeo = await axios.get(
        `https://vimeo.com/api/v2/video/${videoId}.json`
      );
      const vimeoData = await vimeo.data;

      const thumbnail = await fetchAndUploadSocialImage(
        vimeoData[0]?.thumbnail_large,
        videoId
      );

      data.VideoID = videoId;
      data.Image = thumbnail.data;
    }
  },
};
