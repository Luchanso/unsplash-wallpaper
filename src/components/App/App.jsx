import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "../../store";
import Form from "../Form";

class App extends Component {
    render() {
        console.log("render App");
        return (
            <Provider store={store}>
                <Form />
            </Provider>
        );
    }
}

export default App;
