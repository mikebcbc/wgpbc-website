/* eslint-disable prettier/prettier */
const config = require("./config/config");

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
                    Preacher: {
                        populate: {
                            Avatar: "*",
                        },
                    },
                    Meeting: "*",
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
        "meeting",
    ],
    singleTypes: [],
};

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: `Winter Garden Primitive Baptist Church`,
        description: `Step into a time tunnel, walk in "the old paths", and worship in a manner that is 2000 years old. No distractions from the message of Jesus Christ and Him crucified.`,
        image: `/images/church.png`,
        siteUrl: `https://www.wintergardenpbc.com`,
        keywords: `primitive baptist, winter garden, winter garden church, church in winter garden, winter garden pbc, wgpbc`,
    },
    flags: {
        DEV_SSR: true,
    },
    plugins: [
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
