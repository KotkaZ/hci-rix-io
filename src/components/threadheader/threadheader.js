import "./threadheader.css";
import React, { Component } from "react";
import history from "../../history";
import { Chip } from "primereact/chip";
import {Button} from "primereact/button";

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
          <div className="p-col-5 p-grid p-nogutter">
            <h3 className="p-col-12 p-m-1">{this.props.title}</h3>
            <div className="p-col-12 p-d-flex p-ai-center">
              <Chip label={this.props.author} image={this.props.avatar} />
              <h5 className="p-m-0 p-pl-3">{this.props.lastpost}</h5>
            </div>
          </div>
          <div className="p-col-5 p-d-flex p-ai-center">{tags}</div>
          <div className="p-col-2 p-grid  p-jc-center p-ai-center">
            <h5 className="p-m-0">{this.props.replies} Replies</h5>
            <h5 className="p-m-0">{this.props.views} Views</h5>

            <div className="p-d-flex"><Button
                icon="pi pi-arrow-up"
                label={this.props.upvotes}
                className="p-button-rounded p-button-sm p-button-success p-button-outlined p-mr-2"
                disabled
            />
              <Button
                  icon="pi pi-arrow-down"
                  label={this.props.downvotes}
                  className="p-button-rounded p-button-sm p-button-danger p-button-outlined"
                  disabled
              /></div>


          </div>

        </div>

        <hr />
      </div>
    );
  }
}
