import React from "react";
import { connect } from "react-redux";


// const Number = props => {
//     return <h1>{props.number}</h1>;
// }

// const Number = props => {
//     const {props} = props
// }

const Number = ({number}) => {
    return <h1>{number}</h1>;
}

const mapStateToProps = store => ({
  number: store.counter.number
});

export default connect(mapStateToProps)(Number); //HOC
