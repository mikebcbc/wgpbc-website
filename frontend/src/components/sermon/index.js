import Button from "@components/ui/button";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
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
import ModalVideo from "react-modal-video";
import { useState } from "react";

const SermonItem = ({
    title,
    image,
    dec,
    preacherName,
    preacherImage,
    videoId,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Sermon>
            <SermonImage>
                <GatsbyImage image={getImage(image)} alt={title} />
            </SermonImage>
            <ContentBox>
                <Title>{title}</Title>
                <p>{dec}</p>
                <SermonFooter>
                    <Preacher>
                        <PreacherImage>
                            <GatsbyImage
                                image={getImage(preacherImage)}
                                alt="Preacher Avatar"
                            />
                        </PreacherImage>
                        {preacherName}
                    </Preacher>
                    <Button
                        size="small"
                        variant="outlined"
                        color="light"
                        sx={{ fontWeight: "400" }}
                        onClick={() => setOpen(true)}
                    >
                        Watch <i className="flaticon-right-arrow"></i>
                    </Button>
                </SermonFooter>
            </ContentBox>
            <ModalVideo
                channel="vimeo"
                autoplay={true}
                isOpen={open}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </Sermon>
    );
};

SermonItem.propTypes = {
    title: PropTypes.string,
    dec: PropTypes.string,
    preacherName: PropTypes.string,
    preacherImage: PropTypes.object,
    videoId: PropTypes.string,
    image: PropTypes.object,
};

export default SermonItem;
