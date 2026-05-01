import styled, { themeGet, device } from "@theme/utils";

export const PostItemWrap = styled.div`
    margin-bottom: 150px;
    position: relative;
    ${device.large} {
        margin-bottom: 30px;
    }

    &:hover {
        .post-footer {
            margin-bottom: 0;
            opacity: 1;
            padding-top: 0;
            visibility: visible;
        }
    }
`;

export const Thumb = styled.div`
    overflow: hidden;
    position: relative;
    min-height: 340px;
    background: ${themeGet("colors.grey")};

    a {
        display: block;
        position: relative;
        height: 340px;
    }

    .gatsby-image-wrapper {
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.8s ease-in-out;
    }
`;

export const MetaDate = styled.div`
    align-items: center;
    background-color: ${themeGet("colors.orange")};
    display: flex;
    flex-direction: column;
    height: 92px;
    justify-content: center;
    left: 35px;
    padding-top: 8px;
    line-height: 23px;
    position: absolute;
    text-align: center;
    top: 32px;
    width: 92px;
    z-index: 2;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);

    span {
        display: block;
        font-family: ${themeGet("fonts.heading")};
        font-weight: 400;
        font-size: 38px;
        letter-spacing: 0;
        line-height: 1;
        margin-bottom: 3px;
    }
    & a {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        display: block;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        text-decoration: none;
        &:hover {
            color: #fff;
            opacity: 0.92;
        }
    }
`;

export const ShapeLine = styled.div`
    border: 2px solid ${themeGet("colors.white")};
    height: 92px;
    left: 45px;
    position: absolute;
    top: 42px;
    width: 92px;
    z-index: 1;
    pointer-events: none;
`;

export const LatestBlogContent = styled.div`
    background-color: ${themeGet("colors.grey")};
    /* More extension below + taller thumb drops the card so it clears the date */
    bottom: -92px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    left: 5px;
    z-index: 3;
    transition: 0.3s;
    min-height: 200px;
    box-shadow: 0 12px 40px rgba(0, 29, 35, 0.08);
    ${device.medium} {
        right: 35px;
        left: 35px;
    }
    ${device.large} {
        right: 15px;
        left: 15px;
    }
    ${device.xlarge} {
        right: 35px;
        left: 35px;
    }
`;

export const LatestBlogContentInner = styled.div`
    padding: 26px 28px 28px;
`;

export const MetaBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-direction: column;
    gap: 15px;

    .post-category {
        background-color: ${themeGet("colors.darkgrey")};
        color: ${themeGet("colors.orange")};
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.2px;
        min-width: 105px;
        padding: 2.5px 11px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.3s;
        width: 100%;
    }

    ${device.small} {
        flex-direction: row;
        gap: 0px;
        .post-category {
            width: auto;
        }
    }
`;

/** Uniform unhovered block: fixed title lines + excerpt lines (original hover/footer unchanged). */
export const Title = styled.h5`
    margin-bottom: 0;
    line-height: 1.4;
    min-height: 2.8em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Excerpt = styled.p`
    margin: 5px 0;
    font-size: 15px;
    line-height: 1.55;
    min-height: calc(1.55em * 3);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const PostFooter = styled.div`
    align-items: center;
    background-color: ${themeGet("colors.grey")};
    display: flex;
    justify-content: space-between;
    margin-bottom: -75px;
    opacity: 1;
    padding: 24px 28px 28px;
    visibility: hidden;
    transition: 0.3s;

    a,
    button {
        max-width: 100%;
    }

    .post-author {
        color: ${themeGet("colors.heading")};
        font-weight: 700;
    }
`;
