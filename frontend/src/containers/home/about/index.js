/** @jsx jsx */
import SectionTitle from "@components/title";
import Button from "@components/ui/button";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { jsx } from "theme-ui";
import {
    AboutContent,
    AboutTextStyle,
    LayerStyle,
    SectionArea,
    Thumb,
} from "./style";

const AboutArea = () => {
    const aboutSectionQuery = useStaticQuery(graphql`
        query AboutSectionQuery {
            aboutJson {
                title
                image1 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image2 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                content1
                content2
                content3
            }
        }
    `);
    const { title, image1, image2, content1, content2, content3 } =
        aboutSectionQuery.aboutJson;

    const imageOne = getImage(image1);
    const imageTwo = getImage(image2);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "50px" }}
                            showImage={false}
                            title={title}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={7}>
                        <LayerStyle>
                            <Thumb>
                                <Row className="m-0">
                                    <Col sm={4} md={4} xl={4} lg={4}>
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageOne}
                                                className="img-one"
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                    <Col
                                        sm={8}
                                        md={8}
                                        lg={12}
                                        xl={8}
                                        className="tilt-animation"
                                    >
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageTwo}
                                                className="img-two"
                                                src=""
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                </Row>
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={6} xl={5}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p className="secondary">{content2}</p>
                            <p className="secondary">{content3}</p>
                            <Button path="/donate" color="gradient">
                                Learn More
                            </Button>
                        </AboutContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutArea;
