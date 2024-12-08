/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import BlogList from "@components/blog/list-blog";
import { BlogPostContentArea } from "./style";
import { StyledPagination } from "../../../SharedStyles";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import { useQueryParam, StringParam } from "use-query-params";
import { navigate } from "gatsby";

const BlogPostArea = ({ blogs, totalCount, currentPage, counts, route }) => {
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
                            blog.Image?.localFile?.childImageSharp
                                ?.gatsbyImageData || null
                        }
                        tags={blog.Tags}
                        body={blog.Content.data.childMarkdownRemark.excerpt}
                        date={blog.publishedAt}
                        slug={blog.Slug}
                        route={route}
                    />
                );
            })}

            <StyledPagination>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={3}
                    totalItemsCount={pageCount}
                    pageRangeDisplayed={8}
                    onChange={(e) => navigate(`/${route}/${e !== 0 ? e : ""}`)}
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
    slug: PropTypes.string,
};

export default BlogPostArea;
