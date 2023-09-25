/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import Parallax from "parallax-js";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    HomeSliderItem,
    Section,
    Content,
    SubTitle,
    HeroTitleWrap,
    LayerStyle,
    SliderShape,
} from "./style";

const Hero = () => {
    const heroSlider = useStaticQuery(graphql`
        query HeroSlider {
            heroJson {
                id
                subTitle
                title1
                title2
                sliderImage {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            quality: 100
                        )
                    }
                }
                shapeImage {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                            quality: 90
                        )
                    }
                }
            }
        }
    `);

    const { subTitle, title1, title2, sliderImage, shapeImage } =
        heroSlider.heroJson;

    // Parallax actives
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });
        parallaxInstance.enable();
        return () => parallaxInstance.disable();
    }, []);

    return (
        <Section>
            <HomeSliderItem>
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6} xl={7}>
                            <Content>
                                <SubTitle>
                                    <StaticImage
                                        src="../../../data/images/icons/giving-hand.png"
                                        alt="Hand with heart in it"
                                        placeholder="blurred"
                                    />
                                    <h6>{subTitle}</h6>
                                </SubTitle>
                                <HeroTitleWrap>
                                    <h1>
                                        {title1}
                                        <br />
                                        {title2}
                                    </h1>
                                </HeroTitleWrap>
                                <div
                                    className="btn-wrp"
                                    sx={{ display: "flex" }}
                                >
                                    <Button path="/about-us" color="gradient">
                                        Who We Are{" "}
                                        <i className="flaticon-right-arrow"></i>
                                    </Button>
                                    <Button
                                        path="/sermons"
                                        variant="outlined"
                                        sx={{ ml: "10px" }}
                                    >
                                        Sermons{" "}
                                        <i className="flaticon-right-arrow"></i>
                                    </Button>
                                </div>
                            </Content>
                        </Col>
                        <Col
                            md={{ span: 5, offset: 1 }}
                            lg={{ span: 5, offset: 1 }}
                            xl={{ span: 5, offset: 0 }}
                        >
                            <LayerStyle>
                                <div className="thumb scene">
                                    <span
                                        className="scene-layer"
                                        data-depth="0.20"
                                    >
                                        <GatsbyImage
                                            image={getImage(sliderImage)}
                                            alt="picture of wgpbc"
                                        />
                                    </span>
                                </div>
                                <div
                                    className="shape-floating-square scene"
                                    ref={sceneEl}
                                >
                                    <span
                                        className="scene-layer"
                                        data-depth="0.10"
                                    >
                                        <GatsbyImage
                                            image={getImage(shapeImage)}
                                            alt="floating accent square"
                                        />
                                    </span>
                                </div>
                            </LayerStyle>
                        </Col>
                    </Row>
                </Container>
                <SliderShape>
                    <div className="slider-shape">
                        <div className="shape-banner-line1">
                            <StaticImage
                                src="../../../data/images/shape/banner-line1.png"
                                alt="banner line"
                                placeholder="blurred"
                            />
                        </div>
                        <div className="shape-banner-line2">
                            <StaticImage
                                src="../../../data/images/shape/banner-line2.png"
                                alt="banner line"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </SliderShape>
            </HomeSliderItem>
        </Section>
    );
};

export default Hero;
