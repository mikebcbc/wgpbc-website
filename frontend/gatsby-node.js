/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(
                    __dirname,
                    "./src/gatsby-plugin-theme-ui"
                ),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
            },
        },
    });
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve("src/templates/single-post/index.js"),
        postList: path.resolve("src/templates/blog/index.js"),
        sermonsList: path.resolve("src/templates/sermons/index.js"),
    };

    return graphql(`
        {
            allStrapiTag {
                nodes {
                    Name
                    Slug
                }
            }

            allStrapiPreacher {
                nodes {
                    Name
                    Avatar {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }

            allStrapiPost {
                nodes {
                    Image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    Title
                    Content {
                        data {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                    id
                    strapi_id
                    Author {
                        firstname
                        lastname
                    }
                    Slug
                    Tags {
                        Name
                        Slug
                    }
                }
            }

            allStrapiSermon {
                nodes {
                    id
                    publishedAt(formatString: "MMM DD")
                    Image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 590)
                            }
                        }
                    }
                    Audio {
                        localFile {
                            publicURL
                        }
                    }
                    Title
                    Verses
                    VideoID
                    Preacher {
                        Name
                        Avatar {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        // Posts
        const posts = res.data.allStrapiPost.nodes;

        // Tag Number Count
        let tagPostCounts = {};
        posts.forEach(({ Tags }) => {
            tagPostCounts["All"] = {
                slug: null,
                count: (tagPostCounts["All"]?.count || 0) + 1,
            };
            Tags.forEach(({ Name, Slug }) => {
                tagPostCounts[Name] = {
                    slug: Slug,
                    count: (tagPostCounts[Name]?.count || 0) + 1,
                };
            });
        });

        posts.forEach((post) => {
            createPage({
                path: `/blog/${post.Slug}`,
                component: templates.singlePost,
                context: {
                    slug: post.Slug,
                    counts: tagPostCounts,
                },
            });
        });

        // Post List Pagination
        const postsPerPage = 3;
        const numberOfPostPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numberOfPostPages }).forEach((_, index) => {
            const inFirstPage = index === 0;
            const currentPage = index + 1;

            if (inFirstPage) {
                createPage({
                    path: `/blog`,
                    component: templates.postList,
                    context: {
                        limit: postsPerPage,
                        skip: 0,
                        currentPage,
                        numberOfPostPages,
                        counts: tagPostCounts,
                    },
                });
            } else {
                createPage({
                    path: `/blog/${currentPage}`,
                    component: templates.postList,
                    context: {
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        currentPage,
                        numberOfPostPages,
                        counts: tagPostCounts,
                    },
                });
            }
        });

        // Sermons
        const sermons = res.data.allStrapiSermon.nodes;
        const sermonsPerPage = 8;
        const numberOfSermonPages = Math.ceil(sermons.length / sermonsPerPage);

        // Tag Number Count
        let authorSermonCounts = {};
        sermons.forEach(({ Preacher }) => {
            if (Preacher == null) {
                return;
            }

            authorSermonCounts["All"] = {
                slug: null,
                count: (authorSermonCounts["All"]?.count || 0) + 1,
            };

            authorSermonCounts[Preacher.Name] = {
                slug: slugify(Preacher.Name),
                count: (authorSermonCounts[Preacher.Name]?.count || 0) + 1,
            };
        });

        Array.from({ length: numberOfSermonPages }).forEach((_, index) => {
            const inFirstPage = index === 0;
            const currentPage = index + 1;

            if (inFirstPage) {
                createPage({
                    path: `/sermons`,
                    component: templates.sermonsList,
                    context: {
                        limit: sermonsPerPage,
                        skip: 0,
                        currentPage,
                        numberOfSermonPages,
                        counts: authorSermonCounts,
                    },
                });
            } else {
                createPage({
                    path: `/sermons/${currentPage}`,
                    component: templates.sermonsList,
                    context: {
                        limit: sermonsPerPage,
                        skip: index * sermonsPerPage,
                        currentPage,
                        numberOfSermonPages,
                        counts: authorSermonCounts,
                    },
                });
            }
        });
    });
};
