import styled, { themeGet, device } from "@theme/utils";

export const SermonsContainer = styled.section`
    padding: ${themeGet("padding.rowPadding.md")};
    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;
