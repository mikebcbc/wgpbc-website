/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import Sidebar from "@components/sidebar";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    Title,
    MetaBox,
    PostHeader,
    PostTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const post = data.strapiPost;
    const image = post.Image?.localFile?.childImageSharp?.gatsbyImageData;
    const author = `${post.Author.firstname} ${post.Author.lastname}`;

    return (
        <Layout>
            <PostHeader>
                <Container>
                    <Row>
                        <Col>
                            <PostTitle>{post.Title}</PostTitle>
                        </Col>
                    </Row>
                </Container>
            </PostHeader>
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    <Thumb>
                                        {image ? (
                                            <GatsbyImage
                                                image={getImage(image)}
                                                alt={post.Title}
                                            />
                                        ) : (
                                            <StaticImage
                                                src="../../data/images/sermons/audio-default.jpg"
                                                alt={post.Title}
                                                placeholder="blurred"
                                            />
                                        )}
                                    </Thumb>
                                    <Content>
                                        <MetaBox>
                                            {post.Tags &&
                                                post.Tags.map((tag, i) => (
                                                    <Link
                                                        className="post-category"
                                                        key={`${slugify(
                                                            tag.Name
                                                        )}-${i}`}
                                                        to={`/tag/${slugify(
                                                            tag.Name
                                                        )}`}
                                                    >
                                                        {tag.Name}
                                                    </Link>
                                                ))}
                                            {author && (
                                                <div className="post-author">
                                                    {/* <span className="icon">
                                                        <StaticImage
                                                            className="author-img"
                                                            src="../../data/images/team/mike.jpg"
                                                            alt="Author"
                                                        />
                                                    </span> */}
                                                    By: {author}
                                                </div>
                                            )}
                                        </MetaBox>
                                        <Title>{post.Title}</Title>
                                        <SingleBlogContent
                                            dangerouslySetInnerHTML={{
                                                __html: post.Content.data
                                                    .childMarkdownRemark.html,
                                            }}
                                        />
                                    </Content>
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
                        </Col>
                        <Col lg={4}>
                            <Sidebar
                                title="Categories"
                                route="category"
                                allRoute="blog"
                                tags={pageContext.counts}
                            />
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

SinglePosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const postQuery = graphql`
    query ($slug: String) {
        strapiPost(Slug: { eq: $slug }) {
            Image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            aspectRatio: 1.77
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
                        html
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
        }
    }
`;

export default SinglePosts;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ data }) => <SEO title={data.strapiPost.Title} />;
