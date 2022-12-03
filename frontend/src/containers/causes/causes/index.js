/** @jsx jsx */
import { jsx } from "theme-ui";
import SermonItem from "@components/sermon";
import { SectionArea } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const CausesAll = () => {
    const sermonsQuery = useStaticQuery(graphql`
        query SermonsQuery {
            allStrapiSermon {
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
    `);

    const causesAreaData = sermonsQuery.allStrapiSermon.nodes;
    return (
        <SectionArea>
            <Container>
                <Row>
                    {causesAreaData &&
                        causesAreaData.map((sermon) => {
                            console.log(sermon);
                            return (
                                <Col lg={4} md={6} sm={6} key={sermon.id}>
                                    <SermonItem
                                        title={sermon.Title}
                                        image={
                                            sermon.Image.localFile
                                                .childImageSharp.gatsbyImageData
                                        }
                                        dec={sermon.Verses}
                                        preacherName={sermon.Preacher.Name}
                                        preacherImage={
                                            sermon.Preacher.Avatar.localFile
                                                .childImageSharp.gatsbyImageData
                                        }
                                        videoId={sermon.VideoID}
                                        audioLink={
                                            sermon.Audio.localFile.publicURL
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesAll;
