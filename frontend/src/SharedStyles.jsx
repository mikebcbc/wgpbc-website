import styled, { themeGet, device } from "@theme/utils";
import image from "./data/images/photos/bg-page-title.jpg";

export const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    .page-item {
        &.active {
            .page-link {
                color: ${themeGet("colors.white")};
                background: ${themeGet("colors.primary")};
                border-color: ${themeGet("colors.primary")};
            }
        }

        .page-link {
            color: ${themeGet("colors.text")};
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Header = styled.div`
    background-image: url(${image});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 35px 0;
    position: relative;
    z-index: 1;
`;

export const HeaderTitle = styled.div`
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
