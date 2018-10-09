import React from "react";

class Result extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
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
        minHeight: 50,
        margin: "auto",
        padding: 30
      },
      button: {
        display: "block",
        margin: "1.5rem auto 0",
        padding: "0.5rem 1rem",
        borderRadius: 5,
        border: "none",
        backgroundColor: "hsl(200,50%,50%)",
        color: "hsl(0,0%,98%)",
        fontSize: "1.3rem",
        fontWeight: "bold",
        letterSpacing: 2
      },
      title: {
        textAlign: "center",
        fontSize: "2.5rem"
      }
    };

    return (
      <div className="backdrop" style={styles.backdropStyle}>
        <div className="modal" style={styles.modalStyle}>
          <h1 style={styles.title}>{this.props.result}</h1>
          <button onClick={this.props.closeBtn} style={styles.button}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
