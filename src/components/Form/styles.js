import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    flex-direction: column;
    width: 240px;

    > * {
        &:not(:first-child) {
            margin-top: 16px;
        }

        button {
        }
    }
`;

export const Error = styled.span`
    color: yellow;
`;
