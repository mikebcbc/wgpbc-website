/** @jsx jsx */
import { jsx } from "theme-ui";
import LatestBlogItem from "@components/blog/latest-blog";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";

const LatestBlog = () => {
    const latestBlogQuery = useStaticQuery(graphql`
        query LatestBlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM DD YYYY")
                            categories
                            author
                            thumbnail {
                                childImageSharp {
                                    gatsbyImageData(width: 580, height: 570)
                                }
                            }
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 55)
                    }
                }
            }
        }
    `);

    const latestBlogData = latestBlogQuery.allMarkdownRemark.edges;

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            sx={{
                                mb: ["50px", "90px", "60px", "90px"],
                                mt: ["0", "30px", "30px", "0"],
                            }}
                            textCenter
                            showImage={true}
                            title={"<span>Pastor's Thoughts</span>"}
                        />
                    </Col>
                </Row>
                <Row>
                    {latestBlogData &&
                        latestBlogData.slice(0, 3).map((blog) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={blog.node.id}>
                                    <LatestBlogItem
                                        title={blog.node.frontmatter.title}
                                        thumbnail={
                                            blog.node.frontmatter.thumbnail
                                        }
                                        categories={
                                            blog.node.frontmatter.categories
                                        }
                                        body={blog.node.excerpt}
                                        date={blog.node.frontmatter.date}
                                        postAuthor={
                                            blog.node.frontmatter.author
                                        }
                                        slug={blog.node.fields.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default LatestBlog;
