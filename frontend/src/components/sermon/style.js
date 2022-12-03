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
    padding: 15px 20px 33px;
    flex: 1;
`;

export const Title = styled.h5`
    line-height: 1.455;
    margin-bottom: 8px;
`;

export const SermonFooter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: auto;

    .dropdown-menu.show {
        opacity: 1 !important;
        pointer-events: auto !important;
        right: 0;
        left: 16% !important;
        top: 42px !important;
        width: 70%;
        font-size: 15px;
        border: 2px solid #d7d7d7;
        border-top: none;

        .dropdown-item {
            margin: 5px 0;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Preacher = styled.h5`
    font-family: ${themeGet("fonts.body")};
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`;

export const PreacherImage = styled.div`
    overflow: hidden;
    height: 40px;
    border-radius: 50%;
    min-width: 40px;
    width: 40px;
    margin-right: 11px;
`;
