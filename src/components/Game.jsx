import React from "react";
import Board from "./Board";
import Menu from "./Menu";
import Result from "./Result";
import * as lib from "../functions/helpers";
import { minimax } from "../minmax";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      isOpen: true,
      showResult: false,
      result: "",
      pieceX: true,
      single: true,
      playerOne: "X",
      playerTwo: "O"
    };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (Math.floor(Math.random() * 2) > 0) {
      this.cpuPlay(this.state.squares);
    }
  };
  showResult = result => {
    this.setState({
      result: result ? `${result} wins!!!` : "draw",
      showResult: true
    });
  };
  resetState = () => {
    this.setState({
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      isOpen: true,
      showResult: false,
      result: "",
      pieceX: true,
      single: true,
      playerOne: "X",
      playerTwo: "O"
    });
  };
  handleClick = i => {
    const squares = [...this.state.squares];
    if (squares[i.target.name] === "X" || squares[i.target.name] === "O") {
      return;
    }

    squares[i.target.name] = this.state.pieceX ? "X" : "O";

    if (this.state.single) {
      this.cpuPlay(squares);
    } else {
      this.setState({
        squares: squares,
        pieceX: !this.state.pieceX
      });
    }
    const emptySquares = squares.filter(s => s !== "X" && s !== "O");
    if (emptySquares.length === 0 || lib.calculateWinner(squares)) {
      this.showResult(lib.calculateWinner(squares));
    }
  };
  cpuPlay = squares => {
    let result = minimax(
      squares,
      this.state.playerTwo,
      this.state.playerOne,
      this.state.playerTwo
    );
    squares[result.index] = this.state.playerTwo;
    this.setState({
      squares: squares,
      pieceX: this.state.pieceX
    });
  };
  handlePieceChange = e => {
    const val = e.target.value === "X" ? true : false;
    this.setState({
      pieceX: val,
      playerOne: val ? "X" : "O",
      playerTwo: val ? "O" : "X"
    });
  };
  handleGameChange = e => {
    const val = e.target.value === "single_player" ? true : false;
    this.setState({
      single: val
    });
  };
  render() {
    return (
      <div className="game">
        <Board
          pieceX={this.state.pieceX}
          handleClick={this.handleClick}
          squares={this.state.squares}
        />

        <Menu
          single={this.state.single}
          show={this.state.isOpen}
          onClose={this.toggleModal}
          changePiece={this.handlePieceChange}
          changeGame={this.handleGameChange}
          pieceX={this.state.pieceX}
        />
        <Result
          closeBtn={this.resetState}
          result={this.state.result}
          show={this.state.showResult}
        />
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
