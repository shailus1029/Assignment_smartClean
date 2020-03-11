import React, { Component } from "react";
import Home from "../src/Containers/Home/Home.jsx";
import { Provider } from "react-redux";
import configureStore from "./Redux/Store/store.js";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Home />
      </Provider>
    );
  }
}
export default App;
