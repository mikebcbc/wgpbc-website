/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Row, Container, Col } from "react-bootstrap";
import { Header, HeaderTitle } from "./style";
import SermonListArea from "../../containers/sermons/sermon-post";
import BlogSidebar from "../../containers/blog/blog-sidebar";
import { graphql } from "gatsby";

const SermonsPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Blog" pathname="/" />
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>All Sermons</HeaderTitle>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <SermonListArea
                sermons={data.allStrapiSermon.nodes}
                totalCount={data.allStrapiSermon.totalCount}
                currentPage={pageContext.currentPage}
                limit={pageContext.limit}
            />
        </Layout>
    );
};

export const listSermonQuery = graphql`
    query ListSermonQuery($skip: Int, $limit: Int) {
        allStrapiSermon(
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
`;

SermonsPage.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
};

export default SermonsPage;
