import "./threadheader.css";
import React, { Component } from "react";
import history from "../../history";
import { Chip } from "primereact/chip";

export default class Threadheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: true,
    };
  }

  render() {
    const tags = this.props.tags
      ? this.props.tags.map(tag => {
          console.log(tag);
          return <Chip label={tag.label} className="p-mr-2" />;
        })
      : [];
    return (
      <div
        className="Threadheader"
        onClick={() => history.push("/singleThreadView")}
      >
        <div className="p-grid p-nogutter">
          <div className="p-col-4">
            <h3 className="p-m-1">{this.props.title}</h3>
            <Chip
              label={this.props.author}
              image={this.props.avatar}
              className="p-m-1"
            />
          </div>
          <div className="p-col-4 p-d-flex p-ai-end">{tags}</div>
          <div className="p-col-2">
            <h5 className="p-m-1">{this.props.lastpost}</h5>
            <h5 className="p-m-1">by {this.props.lastposter}</h5>
          </div>
          <div className="p-col-2">
            <h5 className="p-m-1">{this.props.replies} Replies</h5>
            <h5 className="p-m-1">{this.props.views} Views</h5>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
