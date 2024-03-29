import styled, { themeGet, device } from "@theme/utils";
import image from "../../../data/images/photos/bg-page-title.jpg";

export const SectionArea = styled.section`
    padding: ${themeGet("padding.rowPadding.sm")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const DarkSectionArea = styled.section`
    background-color: ${themeGet("colors.backgroundAlt")};
    padding: ${themeGet("padding.rowPadding.lg")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const ArticlesOfFaith = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    ${device.medium} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const ArticleFaith = styled.div`
    background: white;
    padding: 32px;
`;

export const LayerStyle = styled.div`
    position: relative;

    .row > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
    .row.m-0 {
        margin: 0 !important;
    }
`;
export const Thumb = styled.div`
    .gatsby-image-wrapper {
        width: 100%;
        height: 300px;
        margin-bottom: 25px;
        ${device.medium} {
            height: 600px;
        }
        ${device.large} {
            width: auto;
            height: auto;
        }
    }
`;

export const AboutTextStyle = styled.p`
    color: #464444;
    font-family: "Yeseva One", cursive;
    font-size: 22px;
    line-height: 1.364;
    margin-bottom: 26px;
    margin-right: -10px;
    position: relative;
    &:before {
        background-color: #fc6539;
        content: "";
        height: 100%;
        left: -29px;
        position: absolute;
        top: 7px;
        width: 4px;
    }
`;
export const AboutContent = styled.div`
    padding-left: 0px;
    ${device.large} {
        padding-left: 70px;
    }
`;
export const ContentBoxWrp = styled.div`
    ${device.large} {
        margin-top: 44px;
        padding-left: 40px;
    }
`;

export const ContentBoxItem = styled.div`
    background-color: #fc6539;
    padding: 62px 25px 48px;
    position: relative;
    z-index: 1;
    ${device.large} {
        padding: 62px 35px 48px 43px;
    }
    & .img-line-shape {
        margin-bottom: 34px;
    }
    & .bg-line-shape {
        left: 0;
        position: absolute !important;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`;

export const Title = styled.h3`
    color: #fff;
    font-size: 38px;
    margin-bottom: 59px;
    padding-left: 28px;
    position: relative;
    &::before {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        content: "";
        height: 82.5px;
        left: -1px;
        position: absolute;
        top: 50%;
        width: 82.5px;
        transform: translate(0, -50%);
        -webkit-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
    }
`;

export const DesctionTextOne = styled.p`
    color: #fff;
    margin-bottom: 14px;
    font-size: 14px;
`;

export const DesctionTextTwo = styled.p`
    color: #fff;
    font-family: ${themeGet("fonts.heading")};
    font-size: 14px;
`;
