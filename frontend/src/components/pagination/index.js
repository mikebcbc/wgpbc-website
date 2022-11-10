import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { NavItem, NavLink } from "./style";

const PaginationLinks = ({ currentPage, numberOfPages, slug }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage =
        currentPage - 1 === 1
            ? `/${slug}`
            : `/${slug}/` + (currentPage - 1).toString();
    const nextPage = `/${slug}/` + (currentPage + 1).toString();

    return (
        <Pagination>
            {isFirst ? (
                <NavItem className="disabled">
                    <NavLink href={`/${slug}`}>Prev</NavLink>
                </NavItem>
            ) : (
                <NavItem>
                    <NavLink href={previousPage}>Prev</NavLink>
                </NavItem>
            )}
            {Array.from({ length: numberOfPages }, (_, i) =>
                currentPage === i + 1 ? (
                    <NavItem key={`page-number-${i + 1}`}>
                        <NavLink
                            className="active"
                            href={`/${slug}${i === 0 ? "" : "/" + (i + 1)}`}
                        >
                            {i + 1}
                        </NavLink>
                    </NavItem>
                ) : (
                    <NavItem key={`page-number-${i + 1}`}>
                        <NavLink
                            href={`${
                                i === 0 ? `/${slug}` : `/${slug}/` + (i + 1)
                            }`}
                        >
                            {i + 1}
                        </NavLink>
                    </NavItem>
                )
            )}
            {isLast ? (
                <NavItem className="disabled">
                    <NavLink href={nextPage}>Next</NavLink>
                </NavItem>
            ) : (
                <NavItem>
                    <NavLink href={nextPage}>Next</NavLink>
                </NavItem>
            )}
        </Pagination>
    );
};

PaginationLinks.propTypes = {
    currentPage: PropTypes.number,
    numberOfPages: PropTypes.number,
    slug: PropTypes.string,
};

export default PaginationLinks;
