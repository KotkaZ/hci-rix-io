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
    return <Card header={this.header}>{this.props.threads}</Card>;
  }
}
