/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Row, Container, Col } from "react-bootstrap";
import BlogPostArea from "../../containers/blog/blog-post";
import Sidebar from "@components/sidebar";
import { graphql } from "gatsby";
import { Header, HeaderTitle } from "../../SharedStyles";
import { BlogContainer } from "./style";

const BlogPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Blog" pathname="/" />
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>All Posts</HeaderTitle>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <BlogContainer>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogPostArea
                                blogs={data.allStrapiPost.nodes}
                                totalCount={data.allStrapiPost.totalCount}
                                currentPage={pageContext.currentPage}
                                counts={pageContext.counts}
                            />
                        </Col>
                        <Col lg={4}>
                            <Sidebar
                                title="Categories"
                                tags={pageContext.counts}
                                route="blog"
                            />
                        </Col>
                    </Row>
                </Container>
            </BlogContainer>
        </Layout>
    );
};

export const listBlogQuery = graphql`
    query ListBlogQuery($skip: Int, $limit: Int) {
        allStrapiPost(
            sort: { fields: publishedAt, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            totalCount
            nodes {
                id
                publishedAt(formatString: "MMM DD")
                Image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                aspectRatio: 1.77
                            )
                        }
                    }
                }
                Title
                Content {
                    data {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
                Author {
                    firstname
                    lastname
                }
                Tags {
                    Name
                    Slug
                }
                Slug
            }
        }
    }
`;

BlogPage.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
};

export default BlogPage;
