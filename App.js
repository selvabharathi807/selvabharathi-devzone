import React, { Component } from "react";
import News from "./News";

class App extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
          📰 Live News App
        </h1>
        <News />
      </div>
    );
  }
}

export default App;
