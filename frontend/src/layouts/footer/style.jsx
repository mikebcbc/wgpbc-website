import styled, { device, themeGet } from "@theme/utils";

export const FooterWrap = styled.footer`
    background-color: ${themeGet("colors.backgroundAlt")};
    padding: 16px;
    position: relative;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-end;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

    a {
        font-size: 28px;
        color: ${themeGet("colors.orange")};

        &:hover {
            text-decoration: none;
        }
    }
`;

export const CopyrightText = styled.p`
    color: ${themeGet("colors.white")};
    text-align: center;
    font-size: 16px;
    padding-bottom: 15px;
    & > svg {
        width: 15px;
        height: 15px;
        path {
            fill: red;
        }
    }
    ${device.medium} {
        padding: 0;
    }
    a {
        color: ${themeGet("colors.orange")};
    }
`;
