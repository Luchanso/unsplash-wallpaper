import React from "react";
import { compose } from "redux";
import { performance } from "@luchanso/react-fast-compare";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Content = styled.div`
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

class Form extends React.Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Input placeholder="Collection URL" />
                    <Input
                        type="number"
                        placeholder="Change wallpaper interval (min)"
                    />
                    <Button>Save</Button>
                </Content>
            </Wrapper>
        );
    }
}

export default compose(
    reduxForm({
        form: "settings"
    }),
    performance()
)(Form);
