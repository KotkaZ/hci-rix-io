import "./threadgroup.css";
import React, { Component } from "react";
import { Card } from "primereact/card";

export default class Threadgroup extends Component {
  header = (
    <span>
      <h3 className="p-pl-4 p-pt-3 p-pb-0 p-m-0">{this.props.title}</h3>
    </span>
  );

  render() {
    let groups = this.props.threads;
    if (this.props.threads.length > 1) {
      for (let index = this.props.threads.length - 1; index > 0; index--) {
        groups.splice(index, 0, <hr />);
      }
    }

    return <Card header={this.header}>{groups}</Card>;
  }
}
