import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: 48px 0 52px;
    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.md")};
    }

    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;
