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

const PastorsNotesPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Pastors Notes" pathname="/" />
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>All Pastor's Notes</HeaderTitle>
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
                                route={"pastors-notes"}
                            />
                        </Col>
                        <Col lg={4}>
                            <Sidebar
                                title="Categories"
                                tags={pageContext.counts}
                                route="category"
                                allRoute="pastors-notes"
                            />
                        </Col>
                    </Row>
                </Container>
            </BlogContainer>
        </Layout>
    );
};

export const listPastorsNotesQuery = graphql`
    query ListPastorsNotesQuery($skip: Int, $limit: Int) {
        allStrapiPost(
            sort: { fields: publishedAt, order: DESC }
            limit: $limit
            skip: $skip
            filter: { Tags: { elemMatch: { Name: { ne: "Church Updates" } } } }
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

PastorsNotesPage.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PastorsNotesPage;