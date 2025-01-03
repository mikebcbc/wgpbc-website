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
                <Link to={`/pastors-notes/${slug}`}>
                    {thumbnail ? (
                        <GatsbyImage image={getImage(thumbnail)} alt={title} />
                    ) : (
                        <StaticImage
                            src="../../../data/images/sermons/audio-default.jpg"
                            alt={title}
                            placeholder="blurred"
                        />
                    )}
                </Link>
                <MetaDate>
                    <Link to={`/blog/${slug}`}>
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
                    </MetaBox>
                    <Title>
                        <Link to={`/pastors-notes/${slug}`}>{title}</Link>
                    </Title>
                    <Excerpt>{body}</Excerpt>
                </LatestBlogContentInner>
                <PostFooter className="post-footer">
                    <Button
                        path={`/pastors-notes/${slug}`}
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
