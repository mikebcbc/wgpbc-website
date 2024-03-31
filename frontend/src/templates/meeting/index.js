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

const MeetingPage = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title="Sermons" pathname="/" />
            <Header>
                <Container>
                    <Row>
                        <Col>
                            <HeaderTitle>{pageContext.meeting}</HeaderTitle>
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
                                route={`meeting/${
                                    pageContext.counts[pageContext.meeting].slug
                                }`}
                            />
                        </Col>
                        <Col lg={4}>
                            <Sidebar
                                title="Meetings"
                                tags={pageContext.counts}
                                route="meeting"
                                allRoute="sermons"
                            />
                        </Col>
                    </Row>
                </Container>
            </SermonsContainer>
        </Layout>
    );
};

export const ListMeetingQuery = graphql`
    query listMeetingQuery($skip: Int, $limit: Int, $meeting: String) {
        allStrapiSermon(
            sort: { fields: createdAt, order: DESC }
            limit: $limit
            skip: $skip
            filter: { Meeting: { Title: { eq: $meeting } } }
        ) {
            totalCount
            nodes {
                id
                createdAt(formatString: "MMM DD")
                Image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 590
                                placeholder: BLURRED
                                quality: 100
                            )
                        }
                    }
                }
                AudioURL
                Title
                Verses
                VideoID
                Meeting {
                    Title
                }
                Preacher {
                    Name
                    Avatar {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 40
                                    height: 40
                                    transformOptions: { fit: COVER }
                                    placeholder: BLURRED
                                    quality: 100
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`;

MeetingPage.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
};

export default MeetingPage;
