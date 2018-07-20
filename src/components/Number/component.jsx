import React, { Component } from "react";
import Number from "./Number.jsx";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Numbers extends Component {
  // 각 버튼을 누르면 숫자가 증감하는 기능을 redux의 props로 받아서 기능을 실행.
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

// redux store의 state를 props로 가져옴
const mapStateToProps = state => {
  return {
    number: state.counter.number
  };
};

// redux에 만들어둔 기능을 props로 가져옴
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

// 위의 기능들을 connect로 연결하여 Numbers로 넘겨줌. (여기 컴포넌트로!)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Numbers);
