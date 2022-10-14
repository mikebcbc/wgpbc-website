/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogList from "@components/blog/list-blog";
import { BlogPostContentArea, PaginationArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import PaginationLinks from "../../../components/pagination";
import PropTypes from "prop-types";

const BlogPostArea = ({ blogs, totalCount, currentPage }) => {
    const postsPerPage = 3;
    let numberOfPages = Math.ceil(totalCount / postsPerPage);
    return (
        <BlogPostContentArea>
            {blogs.map((blog, i) => {
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

            <PaginationArea>
                <PaginationLinks
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                />
            </PaginationArea>
        </BlogPostContentArea>
    );
};

BlogPostArea.propTypes = {
    blogs: PropTypes.array,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
};

export default BlogPostArea;
