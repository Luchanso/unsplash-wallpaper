import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { performance } from "@luchanso/react-fast-compare";
import { Field, reduxForm } from "redux-form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FORM_SETTINGS } from "../../model/form";
import { connect } from "react-redux";
import { urlErrorSelector } from "../../selectors/validate/url-error-selector/url-error-selector";
import { errorSelectorCreator } from "../../selectors/validate/error";
import { Wrapper, Content, Error } from "./styles";

const errorSelector = errorSelectorCreator(FORM_SETTINGS, "url");

const mapStateToProps = state => ({
    error: errorSelector(state)
});

class Form extends Component {
    renderColleactionUrl() {
        const component = ({ input, meta }) => (
            <Fragment>
                <Input placeholder="Collection URL" {...input} />
                {meta.touched &&
                    this.props.error && <Error>{this.props.error}</Error>}
            </Fragment>
        );

        return <Field name="url" component={component} type="text" />;
    }

    renderInterval() {
        const component = props => (
            <Input
                type="number"
                placeholder="Change wallpaper interval (min)"
                {...props.input}
            />
        );
        return <Field name="interval" component={component} type="text" />;
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    {this.renderColleactionUrl()}
                    {this.renderInterval()}
                    <Button>Save</Button>
                </Content>
            </Wrapper>
        );
    }
}

export default compose(
    reduxForm({
        form: FORM_SETTINGS
    }),
    connect(mapStateToProps)
)(Form);
