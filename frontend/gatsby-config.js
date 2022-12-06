/* eslint-disable prettier/prettier */
const config = require("./config/config");
const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
    path: `.env`,
});

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: [
        {
            singularName: "sermon",
            queryParams: {
                populate: {
                    Image: "*",
                    Audio: "*",
                    Preacher: {
                        populate: {
                            Avatar: "*",
                        },
                    },
                },
            },
        },
        {
            singularName: "post",
            queryParams: {
                publicationState:
                    process.env.GATSBY_IS_PREVIEW === "true"
                        ? "preview"
                        : "live",
                populate: {
                    Image: "*",
                    Author: "*",
                    Tags: "*",
                },
            },
        },
        "tag",
    ],
    singleTypes: [],
};

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        mainUrl: config.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? config.localUrl
                : `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-use-query-params`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: strapiConfig,
        },
    ],
};
