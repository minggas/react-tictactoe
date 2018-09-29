import React from "react";
import PropTypes from "prop-types";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} name={props.name}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  name: PropTypes.number,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;
