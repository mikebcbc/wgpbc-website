import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleArea, SubTitle, TitleBoxArea, Title } from "./style";

const SectionTitle = ({
    subTitle,
    title,
    textCenter,
    showImage,
    className,
    sx,
}) => {
    return (
        <SectionTitleArea
            className={`${className} ${textCenter ? "text-center" : ""}`}
            sx={sx}
        >
            {subTitle && (
                <SubTitle className={`subtitle line-theme-color`}>
                    {subTitle}
                </SubTitle>
            )}
            <TitleBoxArea>
                <Title
                    className={`title`}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                {showImage && (
                    <StaticImage
                        className="img-shape"
                        src="../../data/images/shape/3.png"
                        alt="Givest-HasTech"
                    />
                )}
            </TitleBoxArea>
        </SectionTitleArea>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    showImage: PropTypes.bool,
    sx: PropTypes.object,
    textCenter: PropTypes.bool,
};
SectionTitle.defaultProps = {
    showImage: false,
};

export default SectionTitle;
