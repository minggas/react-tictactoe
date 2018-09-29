import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    const check =
      this.props.squares[i] === "X" || this.props.squares[i] === "O"
        ? this.props.squares[i]
        : null;
    return <Square name={i} value={check} onClick={this.props.handleClick} />;
  }

  render() {
    return (
      <div className="container">
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}

          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}

          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
