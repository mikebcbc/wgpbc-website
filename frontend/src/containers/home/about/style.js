import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    position: relative;
    background-color: ${themeGet("colors.backgroundAlt")};
    padding: ${themeGet("padding.rowPadding.sm")};

    .title {
        text-align: center;
    }

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};

        .title {
            text-align: left;
        }
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }

    & .img-one {
        display: none !important;
        ${device.medium} {
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
        height: 300px;
        left: -201px;
        position: absolute;
        top: -221px;
        width: 300px;
        z-index: 0;

        ${device.medium} {
            top: -200px;
        }

        ${device.large} {
            top: -260px;
            width: 380px;
            height: 380px;
        }

        ${device.xlarge} {
            top: -301px;
            width: 380px;
            height: 380px;
        }
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

export const AboutTextStyle = styled.p`
    color: ${themeGet("colors.white")};
    font-family: ${themeGet("fonts.heading")};
    font-size: 20px;
    line-height: 1.364;
    margin: 30px 0px 30px 15px;
    position: relative;

    ${device.large} {
        margin: -30px 0px 30px 15px;
        font-size: 22px;
        line-height: 1.364;
        margin-bottom: 26px;
        margin-right: -10px;
    }

    &:before {
        background-color: ${themeGet("colors.orange")};
        content: "";
        height: 100%;
        left: -15px;
        position: absolute;
        top: 7px;
        width: 4px;

        ${device.large} {
            left: -29px;
        }
    }
`;
