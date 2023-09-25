/** @jsx jsx */
import { jsx } from "theme-ui";
import SermonItem from "@components/sermon";
import Button from "@components/ui/button";
import { SectionArea } from "./style";
import SectionTitle from "@components/title";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const SermonArea = () => {
    const sermonQuery = useStaticQuery(graphql`
        query SermonQuery {
            allStrapiSermon(
                sort: { fields: createdAt, order: DESC }
                limit: 3
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
                    Preacher {
                        Name
                        Avatar {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
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
    `);

    const sermonData = sermonQuery.allStrapiSermon.nodes;

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            sx={{
                                mb: ["50px", "30px", "30px", "60px"],
                            }}
                            textCenter
                            showImage={false}
                            title={"Recent Sermons"}
                        />
                    </Col>
                </Row>
                <Row>
                    {sermonData &&
                        sermonData.slice(0, 3).map((sermon) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={sermon.id}>
                                    <SermonItem
                                        title={sermon.Title}
                                        image={
                                            sermon.Image?.localFile
                                                ?.childImageSharp
                                                ?.gatsbyImageData || null
                                        }
                                        dec={sermon.Verses}
                                        preacherName={sermon.Preacher.Name}
                                        preacherImage={
                                            sermon.Preacher.Avatar.localFile
                                                .childImageSharp.gatsbyImageData
                                        }
                                        videoId={sermon.VideoID}
                                        audioLink={sermon.AudioURL || null}
                                    />
                                </Col>
                            );
                        })}
                </Row>
                <Row className="justify-content-center" sx={{ mt: 30 }}>
                    <Button path="/sermons" color="primary" size="small">
                        View All Sermons{" "}
                        <i className="flaticon-right-arrow"></i>
                    </Button>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default SermonArea;
