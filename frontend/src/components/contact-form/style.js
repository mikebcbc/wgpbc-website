import styled, { themeGet, device } from "@theme/utils";
export const ContactFormArea = styled.div`
    padding: 64px;
    background-color: #f7f7f7;
    max-height: 580px;
`;

export const Form = styled.form``;
export const SectionTitle = styled.form`
    margin-bottom: 54px;
`;
export const Subtitle = styled.h5`
    color: #fc6539;
    display: inline-block;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 12px;
    padding-left: 64px;
    position: relative;
    &:after {
        background-color: #fc6539;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: calc(50% - 1.5px);
        width: 43px;
    }
`;
export const Title = styled.h2`
    margin-bottom: 16px;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 2px solid #d7d7d7;
    border-radius: 0;
    color: #001d23;
    font-size: 15px;
    height: 55px;
    padding: 14px 20px;
`;
