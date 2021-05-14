import "./threadPost.css";
import React, { Component } from "react";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";

export default class ThreadPost extends Component {
  render() {
    const header = (
      <div className="p-grid p-jc-between ">
        <div className="p-d-flex p-ml-4 p-mr-0">
          <Avatar
            image={this.props.avatar}
            size="xlarge"
            shape="circle"
            className="p-mt-3"
          />

          <div className="p-ml-2">
            <h3>{this.props.username}</h3>
            <h3>{this.props.date}</h3>
          </div>
        </div>

        <h1 className="p-mt-5">{this.props.threadname}</h1>
        <div className="Upvote p-grid p-jc-end p-mr-6 p-mt-3">
          <i className="pi pi-arrow-circle-up" style={{ fontSize: "4em" }}></i>
          <i
            className="pi pi-arrow-circle-down"
            style={{ fontSize: "4em" }}
          ></i>
        </div>
      </div>
    );
    return (
      <div className="ThreadPost p-grid">
        <Card
          header={header}
          className={`p-col-12 ${
            this.props.threadname ? "mainThread" : "post"
          }`}
        >
          <p>{this.props.threadcontent}</p>
        </Card>
      </div>
    );
  }
}
