import React, { Component } from "react";

export default class Number extends Component {
  render() {
    return (
      <div>
        <p>값: {this.props.number}</p>
        <span onClick={this.props.handleIncrease}>+</span>
        <br />
        <span onClick={this.props.handleDecrease}>-</span>
      </div>
    );
  }
}
