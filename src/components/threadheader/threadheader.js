import "./threadheader.css";
import React, { Component } from "react";

export default class Threadheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: true,
    };
  }

  render() {
    return (
      <div className="Threadheader p-col-12 p-md-8 p-grid p-nogutter">
        <div className="p-col-8">
          <h3>{this.props.title}</h3>
          <h5>Started by {this.props.author}</h5>
        </div>
        <div className="p-col-2">
          <h5>{this.props.replies} Replies</h5>
          <h5>{this.props.views} Views</h5>
        </div>
        <div className="p-col-2">
          <h5>{this.props.lastpost}</h5>
          <h5>by {this.props.lastposter}</h5>
        </div>
      </div>
    );
  }
}
