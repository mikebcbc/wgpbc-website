import styled, { themeGet, device } from "@theme/utils";

export const WidgetSermonItem = styled.div`
    margin-bottom: -10px;
    padding-top: 10px;
`;
export const Thumb = styled.div`
    overflow: hidden;
`;
export const CauseContentBox = styled.div`
    background-color: #f7f7f7;
    padding: 20px 0 0;
`;

export const Title = styled.h5``;

export const ProgressItem = styled.div`
    margin-bottom: 42px;
    .progress {
        .progress-bar {
            position: relative;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            border-radius: 0;
            background: ${themeGet("colors.orange")};
            background: linear-gradient(
                to right,
                ${themeGet("colors.orange")} 0%,
                #fc6539 100%
            );
            &::after {
                background-color: #fc6539;
                border-radius: 50%;
                content: "";
                height: 12px;
                position: absolute;
                right: -3px;
                top: 50%;
                width: 12px;
                transform: translate(0px, -50%);
                -webkit-transform: translate(0px, -50%);
                -moz-transform: translate(0px, -50%);
                -ms-transform: translate(0px, -50%);
                -o-transform: translate(0px, -50%);
            }
        }
    }
`;
export const AmountInfo = styled.div`
    margin-bottom: 30px;
`;
export const DonateAmount = styled.div`
    border: 1px solid #dadada;
    color: #001d23;
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    margin-bottom: 13px;
    margin-right: 11px;
    min-width: 60px;
    text-align: center;
    &.mr-0 {
        margin-right: 0;
    }
    &.donate-custom-amount {
        display: block;
        font-size: 15px;
        height: 45px;
        text-align: left;
        width: 100%;
        .form-control {
            background-color: transparent;
            border: none;
            box-shadow: none;
            color: #001d23;
            font-weight: 400;
            height: 100%;
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 15px;
            appearance: none;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
        }
    }
`;
