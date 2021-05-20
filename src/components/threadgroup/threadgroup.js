import "./threadgroup.css";
import React, { Component } from "react";
import { Card } from "primereact/card";
import ThreadGroupElement from "../threadgroupelement/threadgroupelement";
export default class Threadgroup extends Component {
  header = (
    <span>
      <h2 className="p-pl-4 p-pt-3 p-pb-0 p-m-0">{this.props.title}</h2>
    </span>
  );

  render() {
    const groups = [];
    for (const threadgroup of this.props.threads) {
      groups.push(
        <ThreadGroupElement title={threadgroup.title} desc={threadgroup.desc} />
      );
    }

    return <Card header={this.header}>{groups}</Card>;
  }
}
