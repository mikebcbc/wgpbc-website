import styled, { themeGet, device } from "@theme/utils";
import image from "../../data/images/photos/bg-page-title.jpg";

export const BlogDetailsArea = styled.section`
    padding: 48px 0 52px;
    max-width: 768px;
    margin: 0 auto;
    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const SermonHeader = styled.div`
    background-image: url(${image});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 35px 0;
    position: relative;
    z-index: 1;
`;

export const SermonTitle = styled.div`
    letter-spacing: 0;
    padding: 77px 0;
    text-align: center;
    font-size: 38px;
    line-height: 1.414;
    margin-bottom: 6px;
    font-family: ${themeGet("fonts.heading")};
    color: #fff;
    ${device.large} {
        font-size: 58px;
    }
`;

export const CausesDetailsContent = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
`;
export const CausesDetails = styled.div``;
export const Thumb = styled.div`
    text-align: center;
`;
export const CauseTitle = styled.h4`
    margin-bottom: 25px;
    margin-top: 25px;
`;
export const ShortTitle = styled.h4``;
export const SingleDetailsText = styled.p``;

export const DocumentItem = styled.a`
    align-items: center;
    background-color: #fc6539;
    display: flex;
    height: 75px;
    justify-content: space-between;
    margin-bottom: 23px;
    margin-top: 10px;
    padding: 15px 30px;
    width: 100%;
    &.bgcolor-theme2 {
        background-color: ${themeGet("colors.orange")} !important;
    }
`;
export const DocumentItemTitle = styled.h6`
    color: #fff;
`;
