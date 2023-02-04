/* eslint-disable prettier/prettier */
const path = require("path");
const { object } = require("prop-types");
const { author } = require("./config/config");
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
        categoryList: path.resolve("src/templates/categories/index.js"),
        sermonsList: path.resolve("src/templates/sermons/index.js"),
        preacherList: path.resolve("src/templates/preacher/index.js"),
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
                                gatsbyImageData(placeholder: BLURRED)
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
                                gatsbyImageData(placeholder: BLURRED)
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
                    createdAt(formatString: "MMM DD")
                    Image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 590
                                    placeholder: BLURRED
                                )
                            }
                        }
                    }
                    AudioURL
                    Title
                    Verses
                    VideoID
                    Preacher {
                        Name
                        Avatar {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(placeholder: BLURRED)
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

        // Authors
        Object.keys(tagPostCounts).forEach((name, i) => {
            const numberOfCategoryPages = Math.ceil(
                tagPostCounts[name].count / postsPerPage
            );

            Array.from({ length: numberOfCategoryPages }).forEach(
                (_, index) => {
                    const inFirstPage = index === 0;
                    const currentPage = index + 1;

                    if (inFirstPage) {
                        createPage({
                            path: `/category/${tagPostCounts[name].slug}`,
                            component: templates.categoryList,
                            context: {
                                limit: postsPerPage,
                                skip: 0,
                                category: name,
                                currentPage,
                                numberOfCategoryPages,
                                counts: tagPostCounts,
                            },
                        });
                    } else {
                        createPage({
                            path: `/category/${tagPostCounts[name].slug}/${currentPage}`,
                            component: templates.categoryList,
                            context: {
                                limit: postsPerPage,
                                skip: index * postsPerPage,
                                category: name,
                                currentPage,
                                numberOfCategoryPages,
                                counts: tagPostCounts,
                            },
                        });
                    }
                }
            );
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

        // Preachers
        Object.keys(authorSermonCounts).forEach((name, i) => {
            const numberOfPreacherPages = Math.ceil(
                authorSermonCounts[name].count / sermonsPerPage
            );

            Array.from({ length: numberOfPreacherPages }).forEach(
                (_, index) => {
                    const inFirstPage = index === 0;
                    const currentPage = index + 1;

                    if (inFirstPage) {
                        createPage({
                            path: `/preacher/${authorSermonCounts[name].slug}`,
                            component: templates.preacherList,
                            context: {
                                limit: sermonsPerPage,
                                skip: 0,
                                preacher: name,
                                currentPage,
                                numberOfPreacherPages,
                                counts: authorSermonCounts,
                            },
                        });
                    } else {
                        createPage({
                            path: `/preacher/${authorSermonCounts[name].slug}/${currentPage}`,
                            component: templates.preacherList,
                            context: {
                                limit: sermonsPerPage,
                                skip: index * sermonsPerPage,
                                preacher: name,
                                currentPage,
                                numberOfPreacherPages,
                                counts: authorSermonCounts,
                            },
                        });
                    }
                }
            );
        });
    });
};
