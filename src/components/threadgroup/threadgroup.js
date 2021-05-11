import "./threadgroup.css";
import React, { Component } from "react";

export default class Threadgroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: true,
    };
  }

  render() {
    return (
      <div className="Threadgroup p-col-12 p-md-8 p-grid p-nogutter">
        <h3>{this.props.title}</h3>
        <div>{this.props.threads}</div>
      </div>
    );
  }
}
