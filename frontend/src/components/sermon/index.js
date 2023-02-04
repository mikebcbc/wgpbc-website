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
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const SermonItem = ({
    title,
    image,
    dec,
    preacherName,
    preacherImage,
    videoId,
    audioLink,
}) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <Sermon>
            <SermonImage>
                {image ? (
                    <GatsbyImage image={getImage(image)} alt={title} />
                ) : (
                    <StaticImage
                        src="../../data/images/sermons/audio-default.jpg"
                        alt="Audio Only Image"
                        placeholder="blurred"
                    />
                )}
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
                    <Dropdown
                        show={show}
                        onMouseEnter={(e) => setShow(true)}
                        onMouseLeave={(e) => setShow(false)}
                    >
                        <Dropdown.Toggle
                            as={Button}
                            size="small"
                            variant="outlined"
                            color="light"
                        >
                            View
                            <Dropdown.Menu align="end">
                                {videoId && (
                                    <Dropdown.Item
                                        onClick={(e) => setOpen(true)}
                                    >
                                        Video
                                    </Dropdown.Item>
                                )}
                                {audioLink && (
                                    <Dropdown.Item
                                        onClick={(e) => e.stopPropagation()}
                                        href={audioLink}
                                        target="_blank"
                                    >
                                        Audio Only
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </SermonFooter>
            </ContentBox>
            {videoId && (
                <ModalVideo
                    channel="vimeo"
                    autoplay={true}
                    isOpen={open}
                    videoId={videoId}
                    onClose={() => setOpen(false)}
                />
            )}
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
    audioLink: PropTypes.string,
};

export default SermonItem;
