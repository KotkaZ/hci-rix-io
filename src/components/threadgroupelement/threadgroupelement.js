import "./threadgroupelement.css";
import React, { Component } from "react";
import history from "../../history";

export default class ThreadGroupElement extends Component {
  render() {
    return (
      <div
        className="ThreadGroupElement"
        onClick={() => history.push("/threadsView")}
      >
        <h3 className="p-m-0 p-pl-3">{this.props.title}</h3>
        <p className="p-m-0 p-pl-3">{this.props.desc}</p>
      </div>
    );
  }
}
