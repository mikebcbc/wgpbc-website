import styled, { themeGet, device } from "@theme/utils";
import testimonialTitleBg from "@data/images/contact/congregation.jpg";

export const SectionArea = styled.section`
    padding: ${themeGet("padding.rowPadding.sm")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const TitleWrap = styled.div`
    background: url(${testimonialTitleBg});
    align-items: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

    justify-content: flex-start;
    position: relative;
    min-height: 200px;
    margin-bottom: 30px;
    padding: 40px;

    ${device.large} {
        justify-content: flex-end;
        min-height: 580px;
        margin-bottom: 0;
    }

    &:after {
        content: "";
        height: 100%;
        left: 0;
        opacity: 0.9;
        position: absolute;
        top: 0;
        width: 100%;
        background: ${themeGet("colors.orange")};
        background: ${themeGet("colors.gradient")};
        );
    }
`;
