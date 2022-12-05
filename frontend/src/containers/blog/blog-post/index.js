/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import BlogList from "@components/blog/list-blog";
import { BlogPostContentArea, PaginationArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import PaginationLinks from "../../../components/pagination";
import { StyledPagination } from "../../../SharedStyles";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import { useQueryParam, StringParam } from "use-query-params";
import { navigate } from "gatsby";

const BlogPostArea = ({ blogs, totalCount, currentPage, counts }) => {
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
        <BlogPostContentArea>
            {blogs.map((blog, i) => {
                if (category && !blog.Tags.find((t) => t.Slug === category)) {
                    return;
                }
                return (
                    <BlogList
                        key={i}
                        title={blog.Title}
                        thumbnail={
                            blog.Image.localFile.childImageSharp.gatsbyImageData
                        }
                        tags={blog.Tags}
                        body={blog.Content.data.childMarkdownRemark.excerpt}
                        date={blog.publishedAt}
                        slug={blog.Slug}
                        postAuthor={`${blog.Author.firstname} ${blog.Author.lastname}`}
                    />
                );
            })}

            <StyledPagination>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={3}
                    totalItemsCount={pageCount}
                    pageRangeDisplayed={10}
                    onChange={(e) => navigate(`/blog/${e !== 1 ? e : ""}`)}
                    hideDisabled
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </StyledPagination>
        </BlogPostContentArea>
    );
};

BlogPostArea.propTypes = {
    blogs: PropTypes.array,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
    counts: PropTypes.object,
};

export default BlogPostArea;
