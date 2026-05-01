import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import ModalVideo from "react-modal-video";
import {
    ContentBox,
    Preacher,
    PreacherImage,
    Sermon,
    SermonFooter,
    SermonImage,
    SermonViewMenu,
    SermonViewMenuButton,
    SermonViewMenuLi,
    SermonViewMenuLink,
    SermonViewMenuPanel,
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
    fillCard,
}) => {
    const [videoOpen, setVideoOpen] = useState(false);

    const hasMenuItems = Boolean(videoId || audioLink);
    const toggleId = `sermon-view-${title?.replace(/\s+/g, "-").slice(0, 40)}`;

    return (
        <Sermon $fillCard={fillCard}>
            <SermonImage $fillCard={fillCard}>
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
                        width={960}
                        height={541}
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
                        <SermonViewMenu>
                            <SermonViewToggle
                                type="button"
                                id={toggleId}
                                aria-haspopup="true"
                            >
                                View
                            </SermonViewToggle>
                            <SermonViewMenuPanel
                                className="sermon-view-menu-panel"
                                role="menu"
                                aria-labelledby={toggleId}
                            >
                                {videoId ? (
                                    <SermonViewMenuLi role="none">
                                        <SermonViewMenuButton
                                            type="button"
                                            role="menuitem"
                                            onClick={() => setVideoOpen(true)}
                                        >
                                            Video
                                        </SermonViewMenuButton>
                                    </SermonViewMenuLi>
                                ) : null}
                                {audioLink ? (
                                    <SermonViewMenuLi role="none">
                                        <SermonViewMenuLink
                                            role="menuitem"
                                            href={audioLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Audio only
                                        </SermonViewMenuLink>
                                    </SermonViewMenuLi>
                                ) : null}
                            </SermonViewMenuPanel>
                        </SermonViewMenu>
                    ) : null}
                </SermonFooter>
            </ContentBox>
            {videoId && (
                <ModalVideo
                    channel="vimeo"
                    autoplay={true}
                    isOpen={videoOpen}
                    videoId={videoId}
                    onClose={() => setVideoOpen(false)}
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
    fillCard: PropTypes.bool,
};

export default SermonItem;
