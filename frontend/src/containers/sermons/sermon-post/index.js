/** @jsx jsx */
import React, { useEffect } from "react";
import { jsx } from "theme-ui";
import { navigate } from "gatsby";
import { slugify } from "@utils/functions";
import SermonItem from "@components/sermon";
import { Col, Row, Container } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { StyledPagination } from "../../../SharedStyles";
import { useQueryParam, StringParam } from "use-query-params";
import PropTypes from "prop-types";

const SermonListArea = ({
    sermons,
    totalCount,
    currentPage,
    counts,
    route,
}) => {
    const [hasMounted, setHasMounted] = React.useState(false);
    const [category, setCategory] = useQueryParam("category", StringParam);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    const pageCount = category
        ? Object.values(counts).find((c) => c.slug === category).count
        : totalCount;

    return (
        <Container>
            <Row>
                {sermons.map((sermon, i) => {
                    if (
                        category &&
                        slugify(sermon.Preacher?.Name) !== category
                    ) {
                        return;
                    }
                    return (
                        <Col lg={6} md={6} sm={12} key={sermon.id}>
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
                                audioLink={sermon.AudioURL || null}
                            />
                        </Col>
                    );
                })}
            </Row>

            <StyledPagination>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={8}
                    totalItemsCount={pageCount}
                    pageRangeDisplayed={8}
                    onChange={(e) => navigate(`/${route}/${e !== 1 ? e : ""}`)}
                    hideDisabled
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </StyledPagination>
        </Container>
    );
};

SermonListArea.propTypes = {
    sermons: PropTypes.array,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
    counts: PropTypes.object,
    route: PropTypes.string,
};

export default SermonListArea;
