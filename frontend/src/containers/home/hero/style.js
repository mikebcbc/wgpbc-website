import styled, { themeGet, device } from "@theme/utils";
import BannerTitleShape from "@data/images/shape/banner-title-shape.png";

export const Section = styled.section`
    position: relative;
`;

export const HomeSliderItem = styled.div`
    height: auto;
    align-items: center;
    display: flex;
    position: relative;
    padding: ${themeGet("padding.rowPadding.md")};
    @media (min-width: 1400px) and (max-width: 1799px) {
        .container {
            max-width: 1397px;
        }
    }

    ${device.medium} {
        padding: ${themeGet("padding.rowPadding.lg")};
    }

    ${device.xlarge} {
        height: 800px;
    }

    ${device.xxlarge} {
        height: 900px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${device.large} {
        display: block;
        text-align: left;
    }
`;

export const SubTitle = styled.div`
    margin-bottom: 28px;
    display: flex;
    align-items: center;

    img {
        margin-right: 14px;
        position: relative;
        top: -9px;
        vertical-align: middle;
    }
    h6 {
        margin-left: 14px;
        display: inline-block;
        font-family: ${themeGet("fonts.body")};
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        margin-left: 20px;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
export const HeroTitleWrap = styled.div`
    margin-bottom: 30px;
    h1 {
        font-size: ${themeGet("fontSize.h1.0")};
        line-height: 1.2;
        ${device.medium} {
            font-size: ${themeGet("fontSize.h1.2")};
        }
        ${device.large} {
            font-size: ${themeGet("fontSize.h1.3")};
        }
        ${device.xlarge} {
            font-size: ${themeGet("fontSize.h1.4")};
            line-height: 1.0934;
        }
        ${device.xxlarge} {
            font-size: ${themeGet("fontSize.h1.5")};
            line-height: 1.0934;
        }
        ${device.xxlarge} {
            font-size: ${themeGet("fontSize.h1.6")};
            line-height: 1.0934;
        }

        span {
            display: inline-block;
            position: relative;
            z-index: 1;
            &:before {
                background-image: url(${BannerTitleShape});
                background-repeat: no-repeat;
                content: "";
                display: block;
                height: 100%;
                left: 50%;
                background-position: 0 5px;
                background-size: cover;
                min-width: auto;
                width: 110%;
                position: absolute;
                top: 50%;
                z-index: -1;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);
            }
            ${device.large} {
                &:before {
                    background-position: 13px 9px;
                    background-size: cover;
                    min-width: 234px;
                    width: 100%;
                }
            }
            ${device.xlarge} {
                &:before {
                    background-position: 13px 9px;
                    background-size: cover;
                    min-width: 304px;
                    width: 100%;
                }
            }
            ${device.xxlarge} {
                &:before {
                    background-position: 13px 9px;
                    background-size: cover;
                    min-width: 334px;
                    width: 100%;
                }
            }
        }
    }
`;

export const LayerStyle = styled.div`
    margin-top: 54px;
    position: relative;
    ${device.small} {
        max-width: 380px;
        margin-left: auto;
        mrgin-right: auto;
        right: 60px;
        margin-top: 0;
    }
    ${device.medium} {
        right: 0px;
        max-width: 100%;
    }
    ${device.large} {
        right: 0px;
        max-width: 100%;
    }

    ${device.xlarge} {
        right: 40px;
        max-width: 100%;
    }
    ${device.xxlarge} {
        right: 100px;
        max-width: 100%;
    }
    ${device.xxxlarge} {
        margin-top: 0;
        right: 30px;
        top: 10px;
    }

    .thumb {
        display: none;
        border-radius: 20%;
        position: relative;
        z-index: 2;

        ${device.large} {
            display: block;
        }

        img {
            border-radius: 20%;
            max-width: none !important;
            ${device.xxlarge} {
                width: auto;
            }
        }
    }
    .shape-floating-square {
        position: absolute;
        right: -41px;
        top: -41px;
        display: none;

        ${device.large} {
            display: block;
            max-width: 180px;
        }

        ${device.xlarge} {
            right: -41px;
            top: -91px;
            max-width: 240px;
            display: block;
        }

        ${device.xxlarge} {
            right: -53px;
            top: -138px;
        }

        @media (min-width: 1600px) and (max-width: 1799px) {
            right: 0px;
        }
    }
`;

export const SliderShape = styled.div`
    .slider-shape .shape-floating-square {
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
    .slider-shape .shape-style2 {
        left: 0;
        position: absolute;
        top: 0;
        z-index: -1;
    }
    @media only screen and (max-width: 1199px) {
        .slider-shape .shape-style2 {
            left: -500px;
        }
    }
    @media only screen and (max-width: 991px) {
        .slider-shape .shape-style2 {
            left: -800px;
            top: -100px;
        }
    }
    .slider-shape .shape-banner-line1 {
        position: absolute;
        right: calc(72% + 14px);
        top: 0;
        z-index: 0;
    }
    @media only screen and (max-width: 767px) {
        .slider-shape .shape-banner-line1 {
            display: none;
        }
    }
    .slider-shape .shape-banner-line2 {
        left: 0;
        position: absolute;
        top: 0;
        z-index: 0;
    }
    @media (max-width: 1799px) {
        .slider-shape .shape-banner-line2 {
            top: -130px;
        }
    }
    @media only screen and (max-width: 1199px) {
        .slider-shape .shape-banner-line2 {
            top: -150px;
        }
    }
    @media only screen and (max-width: 991px) {
        .slider-shape .shape-banner-line2 {
            top: -200px;
        }
    }
    @media only screen and (max-width: 767px) {
        .slider-shape .shape-banner-line2 {
            display: none;
        }
    }
`;

export const DonateContent = styled.div`
    border-radius: 50%;
    color: #fff;
    left: 50%;
    text-align: center;
    position: absolute;
    top: calc(50% + 2px);
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    .raised-amount {
        font-family: ${themeGet("fonts.heading")};
        font-size: 28px;
        line-height: 1;
        margin-bottom: 12px;
        ${device.large} {
            font-size: 50px;
        }
    }
    .donate-title {
        color: #fff;
        font-size: 16px;
        margin: 0;
        ${device.large} {
            font-size: 20px;
        }
    }
`;
