import "./threadgroupelement.css";
import React, { Component } from "react";
import history from "../../history";

export default class ThreadGroupElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 1,
    };
  }

  hoverStart = () => {
    this.setState({ isHover: 5 });
  };

  hoverEnd = () => {
    this.setState({ isHover: 1 });
  };
  render() {
    return (
      <div
        className={`ThreadGroupElement p-p-3 p-shadow-${this.state.isHover}`}
        onClick={() => history.push("/threadsView")}
        onMouseEnter={this.hoverStart}
        onMouseLeave={this.hoverEnd}
      >
        <h3 className="p-m-0">{this.props.title}</h3>
        <p className="p-m-0">{this.props.desc}</p>
      </div>
    );
  }
}
