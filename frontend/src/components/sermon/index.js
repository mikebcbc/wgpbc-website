import Button from "@components/ui/button";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    ContentBox,
    Preacher,
    PreacherImage,
    Sermon,
    SermonFooter,
    SermonImage,
    Title,
} from "./style";

const SermonItem = ({
    title,
    dec,
    preacherName,
    image,
    preacherImage,
    slug,
}) => {
    return (
        <Sermon>
            <SermonImage>
                <GatsbyImage image={getImage(image)} alt={title} />
            </SermonImage>
            <ContentBox>
                <Title>
                    <Link to={`/causes/${slug}`}>{title}</Link>
                </Title>
                <p>{dec}</p>
                <SermonFooter>
                    <Preacher>
                        <Link to={`/causes/${slug}`}>
                            <PreacherImage>
                                <GatsbyImage
                                    image={getImage(preacherImage)}
                                    alt="Icon"
                                />
                            </PreacherImage>
                            {preacherName}
                        </Link>
                    </Preacher>
                    <Button
                        path={`/causes/${slug}`}
                        size="small"
                        variant="outlined"
                        color="light"
                        sx={{ fontWeight: "400" }}
                    >
                        Watch <i className="flaticon-right-arrow"></i>
                    </Button>
                </SermonFooter>
            </ContentBox>
        </Sermon>
    );
};

SermonItem.propTypes = {
    title: PropTypes.string,
    dec: PropTypes.string,
    preacherName: PropTypes.string,
    image: PropTypes.object,
    preacherImage: PropTypes.object,
    slug: PropTypes.string,
};

export default SermonItem;
