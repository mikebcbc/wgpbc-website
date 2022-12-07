import styled, { themeGet, device } from "@theme/utils";

export const SidebarArea = styled.div`
    margin-top: 50px;
    ${device.large} {
        margin-top: 0;
    }
`;

export const Widget = styled.div`
    background-color: #f7f7f7;
    padding: 35px 15px 33px;
    margin-bottom: 60px;
    ${device.small} {
        padding: 47px 48.5px 50px;
    }
    ${device.medium} {
        padding: 47px 48.5px 50px;
    }
    ${device.large} {
        padding: 35px 15px 33px;
    }
    ${device.xlarge} {
        padding: 47px 48.5px 50px;
    }
`;

export const WidgetTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 12px;
    ${device.medium} {
        font-size: 28px;
        margin-bottom: 18px;
    }
`;
export const SeparatorLine = styled.div`
    margin-bottom: 27px;
`;

export const TagSidebar = styled.div`
    a {
        background-color: #fff;
        color: #595959;
        display: block;
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 10px;
        padding: 13px 20px 10px;
        position: relative;
        transition: 0.2s;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -ms-transition: 0.2s;
        -o-transition: 0.2s;
        span {
            float: right;
        }
        &:after {
            background-color: #fff;
            border-radius: 50%;
            content: "";
            height: 6px;
            left: 20px;
            opacity: 0;
            position: absolute;
            top: 50%;
            width: 6px;
            transform: translate(0px, -50%);
            -webkit-transform: translate(0px, -50%);
            -moz-transform: translate(0px, -50%);
            -ms-transform: translate(0px, -50%);
            -o-transform: translate(0px, -50%);
            transition: 0.2s;
            -webkit-transition: 0.2s;
            -moz-transition: 0.2s;
            -ms-transition: 0.2s;
            -o-transition: 0.2s;
        }
        &:hover {
            &:after {
                opacity: 1;
            }
            color: #fff;
            padding-left: 38px;
            background: ${themeGet("colors.orange")};
            background: ${themeGet("colors.gradient")};
        }
    }
`;
