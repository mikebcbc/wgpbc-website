import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Dropdown from "react-bootstrap/Dropdown";
import ModalVideo from "react-modal-video";
import {
    ContentBox,
    Preacher,
    PreacherImage,
    Sermon,
    SermonFooter,
    SermonImage,
    Title,
    SermonViewToggle,
} from "./style";

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

    const hasMenuItems = Boolean(videoId || audioLink);

    return (
        <Sermon>
            <SermonImage>
                {image ? (
                    <GatsbyImage
                        image={getImage(image)}
                        alt={title}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        style={{ width: "100%", height: "100%" }}
                    />
                ) : (
                    <StaticImage
                        src="../../data/images/sermons/audio-default.jpg"
                        alt="Audio Only Image"
                        width={275}
                        height={155}
                        placeholder="blurred"
                        transformOptions={{ fit: "cover" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                )}
            </SermonImage>
            <ContentBox>
                <Title>{title}</Title>
                <p>{dec}</p>
                <SermonFooter>
                    <Preacher>
                        {preacherImage ? (
                            <PreacherImage>
                                <GatsbyImage
                                    image={getImage(preacherImage)}
                                    alt="Preacher Avatar"
                                />
                            </PreacherImage>
                        ) : null}
                        <span>{preacherName || ""}</span>
                    </Preacher>
                    {hasMenuItems ? (
                        <Dropdown
                            show={show}
                            alignRight
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        >
                            <Dropdown.Toggle
                                as={SermonViewToggle}
                                id={`sermon-view-${title?.slice(0, 20)}`}
                            >
                                View
                            </Dropdown.Toggle>
                            <Dropdown.Menu renderOnMount>
                                {videoId && (
                                    <Dropdown.Item
                                        as="button"
                                        type="button"
                                        onClick={() => setOpen(true)}
                                    >
                                        Video
                                    </Dropdown.Item>
                                )}
                                {audioLink && (
                                    <Dropdown.Item
                                        href={audioLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Audio only
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : null}
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
