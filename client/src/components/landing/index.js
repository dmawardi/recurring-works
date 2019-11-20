import React, { Component } from "react";

// Jumbotron
class Landing extends Component {
  render() {
    return (
      <div className="jumbotron">
        {/* Website title */}
        <h1 className="display-4">Recurring Works</h1>
        {/* Subtitle */}
        <p className="lead">Welcome To Your PPM Tracker</p>
        <hr className="my-4"></hr>
        <p>An Empire Project</p>
      </div>
    );
  }
}

export default Landing;
