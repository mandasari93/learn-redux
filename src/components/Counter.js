import React from "react";
import { connect } from "react-redux";
import { increaseNumber, decreaseNumber } from "../store/actions/counter";

const Counter = ({ increaseNumber, decreaseNumber }) => {
  return (
    <div>
      <button onClick={decreaseNumber}>-</button>
      <button onClick={increaseNumber}>+</button>
    </div>
  );
};

export default connect(
  null,
  { increaseNumber, decreaseNumber }
)(Counter);
