import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import HelloWorld from "../HelloWorld";
import store from "../../store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HelloWorld />
            </Provider>
        );
    }
}

export default App;
