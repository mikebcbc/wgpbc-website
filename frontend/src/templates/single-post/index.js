/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import BlogSidebar from "@containers/blog/blog-sidebar";
import authors from "@utils/authors";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    Title,
    MetaBox,
    CategorySocialContent,
    PostSocialItems,
    PostCategoryItems,
    CommentArea,
    CommentTitle,
    PostHeader,
    PostTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const post = data.strapiPost;
    const image = post.Image.localFile.childImageSharp.gatsbyImageData;
    const author = `${post.Author.firstname} ${post.Author.lastname}`;
    // const image = getImage(post.thumbnail.childImageSharp);

    // Author Post page
    // const author = authors.find((x) => x.name === post.author);

    // // Social Share
    // const baseUrl = "https://hasthems.com";

    // // Disqus Comments add
    // const disqusShorttname = "mitech-1";
    // const disquscConfig = {
    //     identifier: data.markdownRemark.id,
    //     title: post.title,
    //     url: baseUrl + "/" + pageContext.slug,
    // };

    return (
        <Layout>
            {/* <SEO title={post.title} pathname="/" /> */}
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
                                        <GatsbyImage
                                            image={image}
                                            alt={post.title}
                                        />
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
                                                    <span className="icon">
                                                        <StaticImage
                                                            className="author-img"
                                                            src="../../data/images/team/mike.jpg"
                                                            alt="Author"
                                                        />
                                                    </span>
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

                                        <CategorySocialContent>
                                            {/* <PostSocialItems>
                                                <a
                                                    href={
                                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                                        baseUrl +
                                                        pageContext.slug
                                                    }
                                                >
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                                <a href="#/">
                                                    <i className="icofont-skype"></i>
                                                </a>
                                                <a
                                                    href={
                                                        "https://twitter.com/share?url=" +
                                                        baseUrl +
                                                        pageContext.slug +
                                                        "&text=" +
                                                        post.title +
                                                        "&via" +
                                                        "twitterHandle"
                                                    }
                                                >
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </PostSocialItems> */}
                                        </CategorySocialContent>
                                    </Content>
                                    {/* <CommentArea>
                                        <CommentTitle>Comments</CommentTitle>
                                        <DiscussionEmbed
                                            shortname={disqusShorttname}
                                            config={disquscConfig}
                                        />
                                    </CommentArea> */}
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar tags={pageContext.counts} />
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
                        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.77)
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
