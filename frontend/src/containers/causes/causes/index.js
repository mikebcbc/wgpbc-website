/** @jsx jsx */
import { jsx } from "theme-ui";
import SermonItem from "@components/sermon";
import { SectionArea } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const CausesAll = () => {
    const sermonQuery = useStaticQuery(graphql`
        query SermonPageQuery {
            allSermonsJson {
                edges {
                    node {
                        id
                        title
                        link
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

    const causesAreaData = sermonQuery.allSermonsJson.edges;
    return (
        <SectionArea>
            <Container>
                <Row>
                    {causesAreaData &&
                        causesAreaData.map((causesData) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    key={causesData.node.id}
                                >
                                    <SermonItem
                                        image={causesData.node.image}
                                        title={causesData.node.title}
                                        sermon={causesData.node.link}
                                        dec={causesData.node.dec}
                                        preacherName={
                                            causesData.node.preacherName
                                        }
                                        preacherImage={
                                            causesData.node.preacherImage
                                        }
                                        slug={causesData.node.fields.slug}
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
