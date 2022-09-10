/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import SectionTitle from "@components/title";
import EventItem from "@components/events";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Video from "@components/ui/video";
import Tilt from "react-parallax-tilt";
import { SectionArea, EventContentWrap, LayerStyle, Thumb } from "./style";

const EventArea = () => {
    const eventsQuery = useStaticQuery(graphql`
        query EventsQuery {
            allEventJson {
                edges {
                    node {
                        title
                        path
                        eventDate
                        id
                        eventSubject
                        thumbImg {
                            childImageSharp {
                                gatsbyImageData(height: 256)
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

    const eventsData = eventsQuery.allEventJson.edges;

    // Video Modal Popup
    const [isOpen, setOpen] = useState(false);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8}>
                        <SectionTitle
                            titleStyle
                            sx={{
                                mb: ["30px", "50px", "80px", "110", "123px"],
                            }}
                            title={"Join Recent Fundraising Event Of Givest."}
                            subTitle={"Recent Events"}
                        />
                        <EventContentWrap>
                            {eventsData &&
                                eventsData.slice(0, 3).map((item) => {
                                    return (
                                        <EventItem
                                            key={item.node.id}
                                            title={item.node.title}
                                            eventDate={item.node.eventDate}
                                            eventSubject={
                                                item.node.eventSubject
                                            }
                                            thumbImg={
                                                item.node.thumbImg
                                                    .childImageSharp
                                            }
                                            slug={item.node.fields.slug}
                                        />
                                    );
                                })}
                        </EventContentWrap>
                    </Col>
                    <Col
                        sm={{ span: 8, offset: 2 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 4, offset: 0 }}
                    >
                        <LayerStyle>
                            <Thumb>
                                <Tilt
                                    className=" js-tilt"
                                    scale={1.04}
                                    tiltReverse={true}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    perspective={3000}
                                    transitionSpeed={4000}
                                >
                                    <StaticImage
                                        src="../../../data/images/photos/event1.png"
                                        alt="Image-Givest"
                                    />
                                </Tilt>

                                <div className="play-video-btn">
                                    <div
                                        className="btn-play play-video-popup wave-btn"
                                        onClick={() => setOpen(true)}
                                        role="button"
                                        tabIndex="0"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="icon">
                                            <StaticImage
                                                src="../../../data/images/icons/play.png"
                                                alt="Icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Thumb>

                            <Video
                                videoId="L61p2uyiMSo"
                                isOpen={isOpen}
                                setOpen={setOpen}
                            />

                            <div className="shape-style1">
                                <StaticImage
                                    src="../../../data/images/shape/line1.png"
                                    alt="Image-Givest"
                                />
                            </div>
                            <div className="shape-style2">
                                <StaticImage
                                    src="../../../data/images/shape/line2.png"
                                    alt="Image-Givest"
                                />
                            </div>
                            <div className="shape-style3">
                                <StaticImage
                                    src="../../../data/images/shape/line3.png"
                                    alt="Image-Givest"
                                />
                            </div>
                            <div className="shape-style4">
                                <StaticImage
                                    src="../../../data/images/shape/line4.png"
                                    alt="Image-Givest"
                                />
                            </div>
                        </LayerStyle>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default EventArea;
