/** @jsx jsx */
import { jsx } from "theme-ui";
import SermonItem from "@components/sermon";
import { SectionArea } from "./style";
import SectionTitle from "@components/title";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const SermonArea = () => {
    const sermonQuery = useStaticQuery(graphql`
        query SermonQuery {
            allSermonsJson {
                edges {
                    node {
                        id
                        title
                        dec
                        preacherName
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 580)
                            }
                        }
                        preacherImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const sermonData = sermonQuery.allSermonsJson.edges;

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            sx={{ mb: "100px" }}
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
                                <Col lg={4} md={6} sm={6} key={sermon.node.id}>
                                    <SermonItem
                                        image={sermon.node.image}
                                        title={sermon.node.title}
                                        dec={sermon.node.dec}
                                        preacherName={sermon.node.preacherName}
                                        preacherImage={
                                            sermon.node.preacherImage
                                        }
                                        slug={sermon.node.fields.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default SermonArea;
