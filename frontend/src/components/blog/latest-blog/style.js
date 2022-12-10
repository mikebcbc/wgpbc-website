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
    a {
        display: block;
        position: relative;
    }
    img {
        width: 100%;
        transition: all 0.8s ease-in-out;
    }
`;

export const MetaDate = styled.div`
    align-items: center;
    background-color: ${themeGet("colors.orange")};
    display: flex;
    height: 92px;
    justify-content: center;
    left: 35px;
    padding-top: 8px;
    line-height: 23px;
    position: absolute;
    text-align: center;
    top: 25px;
    width: 92px;
    z-index: 1;
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
    }
`;

export const PostShare = styled.div`
    font-size: 10px;
    position: relative;
    margin-left: auto;

    .icon-share {
        img {
            filter: contrast(0.01);
            max-width: none;
            transition: 0.3s;
        }
    }

    ul {
        background-color: ${themeGet("colors.white")};
        border-radius: 5px;
        box-shadow: 0px 6px 25px 0px rgb(171 181 189 / 25%);
        display: flex;
        opacity: 0;
        padding: 8px 20px;
        gap: 15px;
        position: absolute;
        right: 0;
        top: 35px;
        visibility: hidden;
        transition: 0.3s;

        &::after {
            border-color: transparent transparent transparent #fff;
            border-style: solid;
            border-width: 9px;
            box-shadow: 0px 6px 25px 0px rgb(171 181 189 / 25%);
            content: "";
            position: absolute;
            right: 6px;
            top: -8px;
            transform: rotate(45deg);
        }

        li {
            line-height: 1;
            a {
                font-size: 14px;

                &.color-facebook {
                    color: #425a99;
                }

                &.color-twitter {
                    color: #67acec;
                }
            }
        }
    }
    &:hover {
        ul {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export const ShapeLine = styled.div`
    border: 2px solid ${themeGet("colors.white")};
    height: 92px;
    left: 45px;
    position: absolute;
    top: 35px;
    width: 92px;
`;

export const LatestBlogContent = styled.div`
    background-color: ${themeGet("colors.grey")};
    bottom: -95px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    left: 5px;
    z-index: 1;
    transition: 0.3s;
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
    padding: 32px;
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
export const Title = styled.h5`
    margin-bottom: 0;
    line-height: 1.4;
`;
export const Excerpt = styled.p`
    margin: 5px 0;
`;

export const PostFooter = styled.div`
    align-items: center;
    background-color: ${themeGet("colors.grey")};
    display: flex;
    justify-content: space-between;
    margin-bottom: -75px;
    opacity: 1;
    padding: 32px;
    visibility: hidden;
    transition: 0.3s;
    .post-author {
        color: ${themeGet("colors.heading")};
        font-weight: 700;
    }
`;
