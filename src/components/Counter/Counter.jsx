import React from "react";
import { connect } from "react-redux";
import { add, dec } from "../../actions/counter";
import styled from "styled-components";

const mapStateToProps = ({ counter }) => ({
    value: counter
});

const mapDispatchToProps = {
    add,
    dec
};

const Wrapper = styled.div`
    color: white;
`;

class Counter extends React.Component {
    render() {
        const { value } = this.props;
        const { handleAdd, handleDec } = this;

        return (
            <Wrapper>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleDec}>Dec</button>
                Counter: {value}
            </Wrapper>
        );
    }

    handleAdd = () => {
        this.props.add();
    };

    handleDec = () => {
        this.props.dec();
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
