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
            allStrapiPost(
                sort: { fields: publishedAt, order: DESC }
                limit: 3
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
                                    aspectRatio: 1
                                    placeholder: BLURRED
                                    quality: 100
                                )
                            }
                        }
                    }
                    Title
                    Content {
                        data {
                            childMarkdownRemark {
                                excerpt(pruneLength: 60)
                            }
                        }
                    }
                    Tags {
                        Name
                        Slug
                    }
                    Slug
                }
            }
        }
    `);

    const latestBlogData = latestBlogQuery.allStrapiPost.nodes;

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
                                <Col lg={4} md={6} sm={6} key={blog.Slug}>
                                    <LatestBlogItem
                                        title={blog.Title}
                                        thumbnail={
                                            blog.Image?.localFile
                                                ?.childImageSharp
                                                ?.gatsbyImageData || null
                                        }
                                        tags={blog.Tags}
                                        body={
                                            blog.Content.data
                                                .childMarkdownRemark.excerpt
                                        }
                                        date={blog.publishedAt}
                                        slug={blog.Slug}
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
