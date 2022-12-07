/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Row, Container, Col } from "react-bootstrap";
import { Header, HeaderTitle } from "../../SharedStyles";
import SermonListArea from "../../containers/sermons/sermon-post";
import Sidebar from "@components/sidebar";
import { graphql } from "gatsby";
import { SermonsContainer } from "./style";

const SermonsPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Sermons" pathname="/" />
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>All Sermons</HeaderTitle>
                        </Col>
                    </Row>
                </Container>
            </Header>
            <SermonsContainer>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <SermonListArea
                                sermons={data.allStrapiSermon.nodes}
                                totalCount={data.allStrapiSermon.totalCount}
                                currentPage={pageContext.currentPage}
                                counts={pageContext.counts}
                                route="sermons"
                            />
                        </Col>
                        <Col lg={4}>
                            <Sidebar
                                title="Preachers"
                                tags={pageContext.counts}
                                route="preacher"
                                allRoute="sermons"
                            />
                        </Col>
                    </Row>
                </Container>
            </SermonsContainer>
        </Layout>
    );
};

export const listSermonQuery = graphql`
    query ListSermonQuery($skip: Int, $limit: Int) {
        allStrapiSermon(
            sort: { fields: createdAt, order: DESC }
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
                                gatsbyImageData(
                                    width: 40
                                    height: 40
                                    transformOptions: { fit: COVER }
                                )
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

export const Head = () => <SEO title="Sermons" pathname="/sermons" />;
