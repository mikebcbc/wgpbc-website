import styled, { themeGet, device } from "@theme/utils";

export const Span = styled.span`
    color: ${themeGet("colors.success")};
    font-family: ${themeGet("fonts.heading")};
`;

export const HeaderTop = styled.div`
    background-color: #fff;
    box-shadow: 0px 15px 35px 0px rgb(0 29 35 / 2%);
    border: 0 !important;
    padding: 15px 0;
    position: relative;
    z-index: 999;
    ${device.medium} {
        padding: 10px 0;
    }
    ${device.large} {
        padding-right: 25px;
    }
    ${device.xxlarge} {
        .container {
            max-width: 1397px;
        }
    }
    &.is-sticky {
        animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
        -webkit-animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
        background-color: #fff;
        box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
`;

export const HeaderMenuArea = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const HeaderActionArea = styled.div`
    margin-left: 91px;
    position: relative;
    top: -0.5px;
    display: flex;
    align-items: center;
    ${device.medium} {
        margin-left: 0;
    }
`;
export const ButtonBoxArea = styled.span`
    order: -1;
    margin-top: 10px;
    ${device.small} {
        order: 1;
    }
`;
export const MobileMenuBtn = styled.button`
    background-color: transparent;
    border: none;
    box-shadow: none;
    height: 18px;
    margin-left: 16px;
    margin-top: 0;
    position: relative;
    width: 35px;
    vertical-align: middle;
    ${device.xlarge} {
        display: none;
    }
    span {
        background-color: ${themeGet("colors.orange")};
        border-radius: 2px;
        display: block;
        height: 3px;
        position: absolute;
        right: 0;
        transition: 0.4s;
        width: 100%;
        &:first-of-type {
            top: 0;
            width: 30px;
        }
        &:nth-of-type(2) {
            top: calc(50% - 0.3px);
            transform: translateY(-50%);
            width: 100%;
        }
        &:last-of-type {
            bottom: 0;
            width: 25px;
        }
    }
`;

/** Covers the viewport when closed with pointer-events: none — does not block the page. */
export const MobileMenuDimmer = styled.div`
    position: fixed;
    inset: 0;
    z-index: 10040;
    background-color: rgba(0, 0, 0, 0.55);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0s linear, visibility 0s linear;

    &.mobile-menu-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
`;

/** Drawer shell — explicit width so the panel is not clipped when translated. */
export const MobileMenuSheet = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(445px, 92vw);
    z-index: 10060;
    pointer-events: none;

    &.mobile-menu-open {
        pointer-events: auto;
    }
`;

export const OffCanvasPanel = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    padding: 0 30px;
    position: relative;
    overflow-y: auto;
    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.12);
    transform: translateX(${(p) => (p.$isOpen ? "0" : "100%")});
    transition: transform 0.3s ease;
`;

export const OffCanvasHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;
export const CloseAction = styled.div``;
export const ButtonClose = styled.button`
    box-sizing: content-box;
    background: none;
    border: none;
    color: #999999;
    font-size: 30px;
    line-height: 1;
    opacity: 1;
    background: transparent
        url(
            data:image/svg + xml,
            %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"fill="%23000"%3e%3cpathd="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/%3e%3c/svg%3e
        )
        center/1em auto no-repeat;
    border: 0;
`;
