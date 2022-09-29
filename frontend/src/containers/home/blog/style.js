import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    background-color: ${themeGet("colors.backgroundAlt")};
    padding: ${themeGet("padding.rowPadding.lg")};

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;
