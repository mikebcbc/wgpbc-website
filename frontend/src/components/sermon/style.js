import styled, { themeGet } from "@theme/utils";

export const Sermon = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    height: 450px;
`;
export const SermonImage = styled.div`
    overflow: hidden;
    display: flex;
    img {
        width: 100%;
        transition: 0.8s;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeGet("colors.grey")};
    padding: 15px 20px 18px;
    flex: 1;
    min-height: 0;
`;

export const Title = styled.h5`
    line-height: 1.455;
    margin-bottom: 8px;
`;

export const SermonFooter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: auto;
    flex-wrap: nowrap;
    min-width: 0;

    .dropdown {
        flex-shrink: 0;
    }

    .dropdown-menu {
        min-width: 9rem;
        font-size: 14px;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        padding: 6px 0;
        margin-top: 6px !important;

        .dropdown-item {
            padding: 8px 16px;
        }
    }
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

/** Compact Bootstrap dropdown toggle (avoids theme Button min-heights). */
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

    &.dropdown-toggle::after {
        display: none !important;
    }

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
