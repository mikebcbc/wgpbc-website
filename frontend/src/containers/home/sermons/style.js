import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: ${themeGet("padding.rowPadding.sm")};
    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;
