import React, { Component } from "react";
import Threadgroup from "../../components/threadgroup/threadgroup";
import data from "../../data/software.json";

export default class Software extends Component {
  render() {
    const groups = data.map(data => {
      return (
        <div className="p-mb-6 p-shadow-8">
          <Threadgroup title={data.title} threads={data.threads} />
        </div>
      );
    });

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-pt-6 p-pb-6">{groups}</div>
      </div>
    );
  }
}
