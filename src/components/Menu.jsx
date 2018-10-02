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
    padding: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  // The modal "window"
  modalStyle: {
    backgroundColor: "#eee",
    borderRadius: 5,
    maxWidth: 800,
    minHeight: 300,
    margin: "auto",
    padding: 30
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.3rem"
  },
  //Title
  title: {
    textAlign: "center",
    fontSize: "2.5rem"
  },
  field: {
    margin: 15,
    borderRadius: 10
  },
  footer: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: 5,
    border: "none",
    backgroundColor: "hsl(200,50%,50%)",
    color: "hsl(0,0%,98%)",
    fontSize: "1.3rem",
    fontWeight: "bold",
    letterSpacing: 2
  },
  options: {
    margin: "10px 10%",
    fontSize: "1.2rem"
  },
  input: {
    marginRight: 15,
    transform: "scale(2)"
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
            <legend style={styles.subtitle}>1 Player or VS</legend>
            <div style={styles.options}>
              <input
                style={styles.input}
                type="radio"
                name="game-style"
                id="single_player"
                value="single_player"
                checked={this.props.single}
                onChange={this.props.changeGame}
              />
              <label htmlFor="single_player">Single Player</label>
            </div>
            <div style={styles.options}>
              <input
                style={styles.input}
                type="radio"
                name="game-style"
                id="two_player"
                value="two_player"
                checked={!this.props.single}
                onChange={this.props.changeGame}
              />
              <label htmlFor="vs">VS</label>
            </div>
          </fieldset>
          <fieldset style={styles.field}>
            <legend style={styles.subtitle}>
              {this.props.single
                ? "Select your piece"
                : "Select 1 Player piece"}
            </legend>
            <div style={styles.options}>
              <input
                style={styles.input}
                type="radio"
                name="piece"
                id="x"
                value="X"
                checked={this.props.pieceX}
                onChange={this.props.changePiece}
              />
              <label htmlFor="x">X</label>
            </div>
            <div style={styles.options}>
              <input
                style={styles.input}
                type="radio"
                name="piece"
                id="o"
                value="O"
                checked={!this.props.pieceX}
                onChange={this.props.changePiece}
              />
              <label htmlFor="o">O</label>
            </div>
          </fieldset>
          <div className="footer" style={styles.footer}>
            <button onClick={this.props.onClose} style={styles.button}>
              Play
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
