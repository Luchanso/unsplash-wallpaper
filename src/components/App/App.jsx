import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "../../store";
import Form from "../Form";
import Counter from "../Counter";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Counter />
                    <Form />
                </div>
            </Provider>
        );
    }
}

export default App;
