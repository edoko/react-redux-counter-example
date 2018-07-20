import React, { Component } from "react";
import Number from "./Number.jsx";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Numbers extends Component {
  handleIncrease = () => {
    this.props.onIncrease();
  };

  handleDecrease = () => {
    this.props.onDecrease();
  };

  render() {
    return (
      <Number
        number={this.props.number}
        handleIncrease={this.handleIncrease}
        handleDecrease={this.handleDecrease}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.counter.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => {
      dispatch(actions.increaseNumber());
    },
    onDecrease: () => {
      dispatch(actions.decreaseNumber());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Numbers);
