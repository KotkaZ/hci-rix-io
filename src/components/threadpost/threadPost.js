import "./threadPost.css";
import React, { Component } from "react";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import history from "../../history";

export default class ThreadPost extends Component {
  render() {
    const header = (
      <div className="p-grid p-jc-between ">
        <div className="p-d-flex p-ml-4 p-mr-0">
          <Avatar
            image={this.props.avatar}
            size="large"
            shape="circle"
            className="p-mt-3"
            onClick={() => history.push("/userProfileOther")}
          />

          <div className="p-ml-2 p-mt-3">
            <h3 className="p-m-0">{this.props.username}</h3>
            <p className="p-m-0">{this.props.date}</p>
          </div>
        </div>

        <h2 className="p-my-auto">{this.props.threadname}</h2>
        <div className="Upvote p-grid p-jc-end p-mr-4 p-mt-3">
          <Button
            icon="pi pi-arrow-up"
            label="281"
            className="p-button-rounded p-button-success p-button-outlined p-mr-2"
            tooltip="This feature is not supported in prototype!"
            tooltipOptions={{
              className: "pink-tooltip",
              position: "bottom",
            }}
          />
          <Button
            icon="pi pi-arrow-down"
            label="281"
            className="p-button-rounded p-button-danger p-button-outlined"
            tooltip="This feature is not supported in prototype!"
            tooltipOptions={{
              className: "pink-tooltip",
              position: "bottom",
            }}
          />
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
