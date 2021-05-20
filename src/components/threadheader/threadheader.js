import "./threadheader.css";
import React, { Component } from "react";
import history from "../../history";
import { Chip } from "primereact/chip";
import { Button } from "primereact/button";

export default class Threadheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 1,
      checked1: false,
      checked2: true,
    };
  }

  hoverStart = () => {
    this.setState({ isHover: 5 });
  };

  hoverEnd = () => {
    this.setState({ isHover: 1 });
  };

  render() {
    const tags = this.props.tags
      ? this.props.tags.map(tag => {
          return <Chip label={tag.label} className="p-mr-2" />;
        })
      : [];
    return (
      <div
        className={`Threadheader p-p-2 p-shadow-${this.state.isHover}`}
        onClick={() => history.push("/singleThreadView")}
        onMouseEnter={this.hoverStart}
        onMouseLeave={this.hoverEnd}
      >
        <div className="p-grid p-nogutter">
          <div className="p-col-5 p-grid p-nogutter">
            <h3 className="p-col-12 p-m-0 p-p-1">{this.props.title}</h3>
            <div className="p-col-12 p-d-flex p-ai-center">
              <Chip label={this.props.author} image={this.props.avatar} />
              <h5 className="p-m-0 p-pl-3">{this.props.lastpost}</h5>
            </div>
          </div>
          <div className="p-col-5 p-d-flex p-ai-center">{tags}</div>
          <div className="p-col-1 p-d-flex p-flex-column p-ai-center p-jc-center">
            <h5 className="p-my-2">{this.props.replies} Replies</h5>
            <h5 className="p-my-2">{this.props.views} Views</h5>
          </div>
          <div className="p-col-1 p-d-flex p-flex-column p-ai-center p-jc-center">
            <Button
              icon="pi pi-arrow-up p-p-0 p-m-0"
              label={this.props.upvotes}
              className="vote-button p-button-text p-button-success"
              disabled
            />
            <Button
              icon="pi pi-arrow-down p-p-0 p-m-0"
              label={this.props.downvotes}
              className="vote-button p-button-text p-button-danger"
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}
