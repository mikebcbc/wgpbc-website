/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Row, Container, Col } from "react-bootstrap";
import BlogPostArea from "../../containers/blog/blog-post";
import BlogSidebar from "../../containers/blog/blog-sidebar";
import { graphql } from "gatsby";

const BlogPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Blog" pathname="/" />
            <div
                className="blog-grid-area"
                sx={{
                    pt: ["70px", "100px", "120px", "150px"],
                    pb: ["280px", "300px", "300px", "390px"],
                }}
            >
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogPostArea
                                blogs={data.allStrapiPost.nodes}
                                totalCount={data.allStrapiPost.totalCount}
                                currentPage={pageContext.currentPage}
                            />
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar tags={pageContext.counts} />
                        </Col>
                    </Row>
                </Container>
            </div>
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
