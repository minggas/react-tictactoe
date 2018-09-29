import React from "react";

class Result extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#eee",
      borderRadius: 5,
      maxWidth: 800,
      minHeight: 300,
      margin: "0 auto",
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <h1>{this.props.result}</h1>
          <button onClick={this.props.closeBtn}>OK</button>
        </div>
      </div>
    );
  }
}

export default Result;
