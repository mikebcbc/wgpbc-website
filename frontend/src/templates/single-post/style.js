import styled, { themeGet, device } from "@theme/utils";
import image from "../../data/images/photos/bg-page-title.jpg";

export const BlogDetailsArea = styled.section`
    padding: ${themeGet("padding.rowPadding.md")};
    ${device.large} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }
`;
export const PostDetailsContentWrap = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
`;
export const PostDetailsBody = styled.div``;

export const Thumb = styled.div`
    margin-bottom: 30px;
    ${device.large} {
        margin-bottom: 40px;
    }
`;

export const PostHeader = styled.div`
    background-image: url(${image});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 35px 0;
    position: relative;
    z-index: 1;
`;

export const PostTitle = styled.div`
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

export const Content = styled.div``;

export const MetaBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
    .post-category {
        background-color: #fc6539;
        color: #fff;
        display: inline-block;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.2px;
        margin-right: 25px;
        min-width: 105px;
        padding: 3px 11px 2px;
        text-align: center;
        text-transform: uppercase;
    }
    .post-author {
        color: #595959;
        display: inline-block;
        font-weight: 500;
        .icon {
            > .author-img {
                border-radius: 50%;
            }
            display: inline-block;
            height: 34px;
            line-height: 28px;
            margin-right: 10px;
            min-width: 28px;
            text-align: center;
            width: 34px;
            transition: 0.3s;
        }
    }
`;

export const Title = styled.h4`
    margin-bottom: 15px;
`;

export const SingleBlogContent = styled.div`
    blockquote{
        background-color: #f7f7f7;
        border-radius: 0;
        margin: 34px 0 35px;
        padding: 38px 50px 41px 50px;
        border: none;
        position: relative;
        z-index: 1;
        margin-bottom: 30px;
        p {
            color: #001d23;
            font-family: ${themeGet("fonts.heading")};
            font-size: 25px;
            font-weight: 400;
            font-style: italic;
            line-height: 1.4;
            background: ${themeGet("colors.gradient")};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            
        }
        &::before {
            content: ""
            font-size: 401.76px;
            position: relative;
            height: 100px;
            widht: 100px;
        }
    }
`;

export const PostCategoryItems = styled.div`
    span {
        color: #001d23;
        display: inline-block;
        font-weight: 700;
        margin-right: 1px;
    }
    a {
        color: #fc6539;
        margin-left: 3px;
        &::after {
            contain: ","
            position: relative;
        }
    }
`;
