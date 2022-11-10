/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import SermonItem from "@components/sermon";
import { PaginationArea, SermonsContainer } from "./style";
import { Col, Row, Container } from "react-bootstrap";
import PaginationLinks from "../../../components/pagination";
import PropTypes from "prop-types";

const SermonListArea = ({ sermons, totalCount, currentPage, limit }) => {
    let numberOfPages = Math.ceil(totalCount / limit);
    return (
        <SermonsContainer>
            <Container>
                <Row>
                    {sermons.map((sermon, i) => {
                        return (
                            <Col lg={4} md={6} sm={6} key={sermon.id}>
                                <SermonItem
                                    key={i}
                                    title={sermon.Title}
                                    image={
                                        sermon.Image.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                    dec={sermon.Verses}
                                    preacherName={sermon.Preacher.Name}
                                    preacherImage={
                                        sermon.Preacher.Avatar.localFile
                                            .childImageSharp.gatsbyImageData
                                    }
                                    videoId={sermon.VideoID}
                                />
                            </Col>
                        );
                    })}
                </Row>

                <PaginationArea>
                    <PaginationLinks
                        currentPage={currentPage}
                        numberOfPages={numberOfPages}
                        slug="sermons"
                    />
                </PaginationArea>
            </Container>
        </SermonsContainer>
    );
};

SermonListArea.propTypes = {
    sermons: PropTypes.array,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
    limit: PropTypes.number,
};

export default SermonListArea;
