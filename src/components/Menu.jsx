import React from "react";

const styles = {
  // The gray background
  backdropStyle: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 50
  },
  // The modal "window"
  modalStyle: {
    backgroundColor: "#eee",
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 300,
    margin: "0 auto",
    padding: 30
  },
  //Title
  title: {
    textAlign: "center"
  },
  field: {
    padding: 10,
    margin: 15,
    borderRadius: 10
  }
};

class Menu extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" style={styles.backdropStyle}>
        <div className="modal" style={styles.modalStyle}>
          <h1 style={styles.title}>Tic-Tac-Toe</h1>
          <fieldset style={styles.field}>
            <legend style={styles.title}>1 Player or VS</legend>
            <div>
              <input
                type="radio"
                name="game-style"
                id="single_player"
                value="single_player"
                checked={this.props.single === true}
                onChange={this.props.changeGame}
              />
              <label htmlFor="single_player">Single Player</label>
            </div>
            <div>
              <input
                type="radio"
                name="game-style"
                id="two_player"
                value="two_player"
                checked={this.props.single === false}
                onChange={this.props.changeGame}
              />
              <label htmlFor="vs">VS</label>
            </div>
          </fieldset>
          <fieldset style={styles.field}>
            <legend style={styles.title}>
              {this.props.single
                ? "Select your piece"
                : "Select 1 Player piece"}
            </legend>
            <div>
              <input
                type="radio"
                name="piece"
                id="x"
                value="X"
                checked={this.props.pieceX === true}
                onChange={this.props.changePiece}
              />
              <label htmlFor="x">X</label>
            </div>
            <div>
              <input
                type="radio"
                name="piece"
                id="o"
                value="O"
                checked={this.props.pieceX === false}
                onChange={this.props.changePiece}
              />
              <label htmlFor="o">O</label>
            </div>
          </fieldset>
          <div className="footer">
            <button onClick={this.props.onClose}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
