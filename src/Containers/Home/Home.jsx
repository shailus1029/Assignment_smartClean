import React, { Component } from "react";
import { connect } from "react-redux";
import { testAction } from "../../Redux/Actions/homeAction.js";
import "./Home.css";

class Home extends Component {
  simpleAction(event) {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="homeContainer">
        <h1>React Project Set Up is ready</h1>
        <button onClick={this.simpleAction.bind(this)}>
          Test redux action
        </button>
        <pre>{JSON.stringify(this.props.homeReducer)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeReducer: state.homeReducer
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(testAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
