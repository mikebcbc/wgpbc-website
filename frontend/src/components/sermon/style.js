import styled, { css, themeGet } from "@theme/utils";

export const Sermon = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    height: ${(p) => (p.$fillCard ? "auto" : "450px")};
    overflow: visible;
`;
/** Default: fixed 275×155. Homepage (fillCard): full card width, same 275∶155 aspect ratio. */
export const SermonImage = styled.div`
    align-self: ${(p) => (p.$fillCard ? "stretch" : "center")};
    width: ${(p) => (p.$fillCard ? "100%" : "275px")};
    max-width: ${(p) => (p.$fillCard ? "none" : "100%")};
    height: ${(p) => (p.$fillCard ? "auto" : "155px")};
    aspect-ratio: ${(p) => (p.$fillCard ? "275 / 155" : "auto")};
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    background: ${themeGet("colors.grey")};

    .gatsby-image-wrapper {
        width: 100% !important;
        height: 100% !important;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.35s ease;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeGet("colors.grey")};
    padding: 15px 20px 18px;
    flex: 1;
    min-height: 0;
    overflow: visible;
`;

export const Title = styled.h5`
    line-height: 1.455;
    margin-bottom: 8px;
`;

export const SermonViewMenu = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
    min-width: 9rem;
    flex-shrink: 0;
    z-index: 30;

    &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 18px;
        z-index: 1;
    }

    &:hover .sermon-view-menu-panel,
    &:focus-within .sermon-view-menu-panel {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }
`;

export const SermonViewMenuPanel = styled.ul`
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    left: auto;
    margin: 0;
    min-width: 9rem;
    padding: 6px 0;
    list-style: none;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    z-index: 2;
    font-size: 14px;
    transition: opacity 0.12s ease, visibility 0.12s ease;
`;

export const SermonViewMenuLi = styled.li`
    margin: 0;
`;

const menuRow = css`
    display: block;
    width: 100%;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    color: #0e0e0e;
    text-align: left;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    line-height: 1.35;

    &:hover,
    &:focus-visible {
        background: rgba(0, 29, 35, 0.06);
        color: ${themeGet("colors.primary")};
        outline: none;
    }
`;

export const SermonViewMenuButton = styled.button`
    ${menuRow}
`;

export const SermonViewMenuLink = styled.a`
    ${menuRow}
`;

export const SermonFooter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: auto;
    flex-wrap: nowrap;
    min-width: 0;
    overflow: visible;
`;

export const Preacher = styled.div`
    font-family: ${themeGet("fonts.body")};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    line-height: 1.3;

    > span:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const PreacherImage = styled.div`
    overflow: hidden;
    height: 40px;
    border-radius: 50%;
    min-width: 40px;
    width: 40px;
    margin-right: 11px;
    flex-shrink: 0;
`;

export const SermonViewToggle = styled.button`
    appearance: none;
    font-size: 13px;
    font-weight: 600;
    padding: 7px 14px;
    border: 2px solid #d7d7d7;
    border-radius: 32px;
    background: #fff;
    color: #001d23;
    line-height: 1.2;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;

    &::after {
        display: inline-block;
        margin-left: 6px;
        vertical-align: 0.15em;
        content: "";
        border-top: 0.28em solid;
        border-right: 0.22em solid transparent;
        border-bottom: 0;
        border-left: 0.22em solid transparent;
    }

    &:hover,
    &:focus-visible {
        border-color: ${themeGet("colors.orange")};
        color: ${themeGet("colors.orange")};
        outline: none;
    }
`;
