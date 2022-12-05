/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { navigate } from "gatsby";
import SermonItem from "@components/sermon";
import { SermonsContainer } from "./style";
import { Col, Row, Container } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { StyledPagination } from "../../../SharedStyles";
import PropTypes from "prop-types";

const SermonListArea = ({ sermons, totalCount, currentPage }) => {
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
                                        sermon.Image?.localFile.childImageSharp
                                            .gatsbyImageData || null
                                    }
                                    dec={sermon.Verses}
                                    preacherName={sermon.Preacher.Name}
                                    preacherImage={
                                        sermon.Preacher?.Avatar?.localFile
                                            .childImageSharp.gatsbyImageData
                                    }
                                    videoId={sermon.VideoID}
                                    audioLink={sermon.Audio.localFile.publicURL}
                                />
                            </Col>
                        );
                    })}
                </Row>

                <StyledPagination>
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={9}
                        totalItemsCount={totalCount}
                        pageRangeDisplayed={10}
                        onChange={(e) =>
                            navigate(`/sermons/${e !== 1 ? e : ""}`)
                        }
                        hideDisabled
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </StyledPagination>
            </Container>
        </SermonsContainer>
    );
};

SermonListArea.propTypes = {
    sermons: PropTypes.array,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
};

export default SermonListArea;
