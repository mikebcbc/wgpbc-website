import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { slugify } from "../../../utils/functions";
import Button from "@components/ui/button";
import {
    PostItemWrap,
    Thumb,
    MetaDate,
    ShapeLine,
    LatestBlogContent,
    LatestBlogContentInner,
    MetaBox,
    Title,
    Excerpt,
    PostShare,
    PostFooter,
} from "./style";

const LatestBlogItem = ({ thumbnail, title, date, tags, body, slug }) => {
    const dateSplit = date.split(" ");
    const month = dateSplit[0];
    const day = dateSplit[1];

    return (
        <PostItemWrap>
            <Thumb>
                <Link to={`/${slug}`}>
                    <GatsbyImage image={getImage(thumbnail)} alt={title} />
                </Link>
                <MetaDate>
                    <Link to={`/${slug}`}>
                        <span>{day}</span>
                        {month}
                    </Link>
                </MetaDate>
                <ShapeLine />
            </Thumb>
            <LatestBlogContent>
                <LatestBlogContentInner>
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
                        {/* <PostShare>
                            <Link className="icon-share" to="/">
                                <StaticImage
                                    src="../../../data/images/icons/share-line-gradient.png"
                                    alt="Icon"
                                />
                            </Link>
                            <ul>
                                <li>
                                    <a className="color-facebook" href="#/">
                                        <i className="social_facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="color-twitter" href="#/">
                                        <i className="social_twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </PostShare> */}
                    </MetaBox>
                    <Title>
                        <Link to={`/${slug}`}>{title}</Link>
                    </Title>
                    <Excerpt>{body}</Excerpt>
                </LatestBlogContentInner>
                <PostFooter className="post-footer">
                    <Button
                        path={`/blog/${slug}`}
                        size="xsmall"
                        color="border-gradient"
                    >
                        Read More
                    </Button>
                </PostFooter>
            </LatestBlogContent>
        </PostItemWrap>
    );
};

LatestBlogItem.propTypes = {
    thumbnail: PropTypes.object,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
    body: PropTypes.string,
    postAuthor: PropTypes.string,
    slug: PropTypes.string,
};

export default LatestBlogItem;
