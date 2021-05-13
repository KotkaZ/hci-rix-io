import React, { Component } from "react";
import Threadgroup from "../../components/threadgroup/threadgroup";
import data from "../../data/hardware.json";
export default class Hardware extends Component {
  render() {
    const groups = data.map(data => {
      return <Threadgroup title={data.title} threads={data.threads} />;
    });

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-pt-6 p-pb-6">{groups}</div>
      </div>
    );
  }
}
