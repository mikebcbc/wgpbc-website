import styled, { themeGet, device } from "@theme/utils";
import image from "../../../data/images/photos/bg-page-title.jpg";

export const SermonsContainer = styled.section`
    padding: ${themeGet("padding.rowPadding.md")};
    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;

export const PaginationArea = styled.div``;
