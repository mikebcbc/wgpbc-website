/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { slugify } from "../../../utils/functions";
import {
    PostItemWrap,
    PostThumb,
    MetaDate,
    ShapeLine,
    ListBlogContent,
    ListBlogContentInner,
    MetaBox,
    Title,
    Excerpt,
} from "./style";

const BlogList = ({ thumbnail, title, date, tags, body, slug, route }) => {
    const dateSplit = date.split(" ");
    const month = dateSplit[0];
    const day = dateSplit[1];
    const image = getImage(thumbnail);

    return (
        <PostItemWrap>
            <PostThumb className="post-hover">
                <GatsbyImage image={image} alt={title} />
                <MetaDate>
                    <Link to="/">
                        <span>{day}</span>
                        {month}
                    </Link>
                </MetaDate>
                <ShapeLine />
            </PostThumb>
            <ListBlogContent>
                <ListBlogContentInner>
                    <MetaBox>
                        {tags &&
                            tags.map((tag, i) => (
                                <Link
                                    className="post-category"
                                    key={`${slugify(tag.Name)}-${i}`}
                                    to={`/tag/${slugify(tag.Name)}`}
                                >
                                    {tag.Name}
                                </Link>
                            ))}
                    </MetaBox>
                    <Title>
                        <Link to={`/${route}/${slug}`}>{title}</Link>
                    </Title>
                    <Excerpt>{body}</Excerpt>
                    <Button
                        sx={{ mt: "20px" }}
                        path={`/${route}/${slug}`}
                        size="small"
                        color="border-gradient"
                    >
                        Read More{" "}
                        <i
                            className="flaticon-right-arrow"
                            sx={{ fontSize: "12px" }}
                        ></i>
                    </Button>
                </ListBlogContentInner>
            </ListBlogContent>
        </PostItemWrap>
    );
};

BlogList.propTypes = {
    thumbnail: PropTypes.object,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
    body: PropTypes.string,
    slug: PropTypes.string,
};

export default BlogList;
