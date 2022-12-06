/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const _ = require("lodash");

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

// Single Post Page
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    // fields create in qrapql file
    if (node.internal.type === "MarkdownRemark") {
        const slugFromTitle = slugify(node.frontmatter.title);
        createNodeField({
            node,
            name: "slug",
            value: slugFromTitle,
        });
    }
    // Sevices Json File Create
    if (node.internal.type === "ServersJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
    // Causes Json File Create
    if (node.internal.type === "SermonsJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
    // Events Json File Create
    if (node.internal.type === "EventJson") {
        createNodeField({
            node,
            name: "slug",
            value: slugify(node.title),
        });
    }
};

// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions;
//     const typeDefs = `
//       type STRAPI_SERMON implements Node {
//         Image: STRAPI__MEDIA
//         Audio: STRAPI__MEDIA
//       }
//     `;
//     createTypes(typeDefs);
// };

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve("src/templates/single-post/index.js"),
        tagPosts: path.resolve("src/templates/tag-post/index.js"),
        categoriePosts: path.resolve("src/templates/categories-post/index.js"),
        postList: path.resolve("src/templates/blog/index.js"),
        sermonsList: path.resolve("src/templates/sermons/index.js"),
        eventPosts: path.resolve("src/templates/event-details/index.js"),
        servicesPosts: path.resolve("src/templates/services-details/index.js"),
    };

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                            categories
                        }
                        fields {
                            slug
                        }
                    }
                }
            }

            allServersJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }

            allEventJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }

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

        // Create Single Blog Post Page
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

        // Post List pagintion
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

        // Sermon List Pagination
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

        // Serives Causes Details Page
        const serversJson = res.data.allServersJson.edges;
        serversJson.forEach(({ node }) => {
            createPage({
                path: `/services/${node.fields.slug}`,
                component: templates.servicesPosts,
                context: {
                    slug: node.fields.slug,
                },
            });
        });

        // Create Events Details Page
        const eventJson = res.data.allEventJson.edges;
        eventJson.forEach(({ node }) => {
            createPage({
                path: `/events/${node.fields.slug}`,
                component: templates.eventPosts,
                context: {
                    slug: node.fields.slug,
                },
            });
        });

        // Get all Categorie Post
        let categories = [];
        _.each(posts, (edge) => {
            if (_.get(edge, "node.frontmatter.categories")) {
                categories = categories.concat(
                    edge.node.frontmatter.categories
                );
            }
        });
        // Categorie Post Page Create
        categories.forEach((categorie) => {
            createPage({
                path: `/categories/${slugify(categorie)}`,
                component: templates.categoriePosts,
                context: {
                    categorie,
                },
            });
        });
    });
};
