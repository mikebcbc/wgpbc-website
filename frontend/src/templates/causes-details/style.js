import styled, { themeGet, device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 70px 0 280px;
    ${device.medium} {
        padding: 100px 0 300px;
    }
    ${device.large} {
        padding: 120px 0 300px;
    }
    ${device.xlarge} {
        padding: 150px 0 390px;
    }
`;
export const CausesDetailsContent = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
`;
export const CausesDetails = styled.div``;
export const Thumb = styled.div``;
export const CauseTitle = styled.h4`
    margin-bottom: 25px;
    margin-top: 25px;
`;
export const ShortTitle = styled.h4``;
export const SingleDetailsText = styled.p``;

export const DocumentItem = styled.a`
    align-items: center;
    background-color: #fc6539;
    display: flex;
    height: 75px;
    justify-content: space-between;
    margin-bottom: 23px;
    margin-top: 10px;
    padding: 15px 30px;
    width: 100%;
    &.bgcolor-theme2 {
        background-color: ${themeGet("colors.orange")} !important;
    }
`;
export const DocumentItemTitle = styled.h6`
    color: #fff;
`;
