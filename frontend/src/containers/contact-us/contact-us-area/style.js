import styled, { themeGet, device } from "@theme/utils";
import image from "../../../data/images/photos/bg-page-title.jpg";

export const SectionArea = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    padding: ${themeGet("padding.rowPadding.sm")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        grid-template-columns: 1fr 1fr;
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const ContactColunm = styled.div`
    display: block;

    ${device.xlarge} {
        display: flex;
        padding-right: 0;
    }

    ${device.xxlarge} {
        display: flex;
        padding-right: 0;
    }
`;

export const ContactMapArea = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    ${device.medium} {
        height: 900px;
    }
    ${device.xlarge} {
        height: auto;
    }
`;
export const ContactInfoContentArea = styled.div`
    padding: 20px;
    position: relative;
    top: auto;
    transform: none;
    min-width: 100%;
    transform: translate(0, 0);
    background: ${themeGet("colors.orange")};
    background: ${themeGet("colors.gradient")};

    ${device.medium} {
        padding: 40px;
    }
`;
export const ContactInfoItem = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 28px;
    padding-bottom: 25px;
    position: relative;
    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
        marging-bottom: 0;
    }
`;
export const ContactIcon = styled.div`
    left: 5px;
    position: absolute;
    top: 29px;
    width: 30px;

    ${device.small} {
        left: 30px;
        width: auto;

        &:before {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            content: "";
            height: 75px;
            left: -30px;
            position: absolute;
            top: -27px;
            width: 75px;
            z-index: -1;
        }
    }
`;
export const ContactInfoContent = styled.div`
    padding-left: 64px;
    color: #fff;
    a,
    p {
        display: block;
        color: #fff;
    }

    ${device.small} {
        padding-left: 128px;
    }
`;
export const ContactTitle = styled.h4`
    color: #fff;
    font-size: 25px;
    margin-bottom: 12px;
    ${device.large} {
        font-size: 35px;
    }
`;
