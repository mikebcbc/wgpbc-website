import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    position: relative;
    background-color: ${themeGet("colors.backgroundAlt")};
    padding: ${themeGet("padding.rowPadding.lg")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }

    & .img-one {
        display: none !important;
        ${device.small} {
            display: inline-block !important;
        }
        ${device.large} {
            display: none !important;
        }
        ${device.xlarge} {
            display: inline-block !important;
        }
    }
`;

export const LayerStyle = styled.div`
    position: relative;
    &:before {
        background-image: ${themeGet("colors.gradient")};
        border-radius: 50%;
        content: "";
        height: 380px;
        left: -201px;
        position: absolute;
        top: -301px;
        width: 380px;
        z-index: 0;
    }

    .row > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }

    .img-two {
        margin-left: 0px;
        ${device.small} {
            margin-left: 0px;
        }
        ${device.large} {
            margin-left: 0px;
        }
        ${device.xlarge} {
            margin-left: -23px;
        }
    }
`;
export const Thumb = styled.div``;

export const AboutTextStyle = styled.p`
    color: ${themeGet("colors.white")};
    font-family: "Yeseva One", cursive;
    font-size: 22px;
    line-height: 1.364;
    margin-bottom: 26px;
    margin-right: -10px;
    position: relative;
    &:before {
        background-color: ${themeGet("colors.orange")};
        content: "";
        height: 105px;
        left: -29px;
        position: absolute;
        top: 7px;
        width: 4px;
    }
`;
export const AboutContent = styled.div``;

export const ListText = styled.span``;
