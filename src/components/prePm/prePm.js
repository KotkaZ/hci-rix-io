import "./prePm.css";
import React, { Component } from "react";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

// <PrePm name="John Doe" imgSrc="...."/>
export default class PrePm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 1,
      chatPartner: {
        imgSrc: "",
        name: "",
      },
    };
  }

  goToChat = () => {
    console.log("klicked");
  };

  hoverStart = () => {
    this.setState({ isHover: 5 });
  };

  hoverEnd = () => {
    this.setState({ isHover: 1 });
  };

  render() {
    return (
      <div className="PrePm p-d-block">
        <Link className="link" to="/Unga_Punga">
          <div
            className={`p-grid p-jc-between p-ai-center p-shadow-${this.state.isHover}`}
            style={{ verticalAlign: "center" }}
            onMouseEnter={this.hoverStart}
            onMouseLeave={this.hoverEnd}
            onClick={this.goToChat}
          >
            <div className="p-grid p-col-4 p-ai-center p-p-2 p-nogutter">
              <Avatar
                className="p-m-2"
                image={this.props.imgSrc}
                shape="circle"
                size="large"
              />
              <div>
                <h3 className="p-m-0">{this.props.name}</h3>
                <p className="p-m-0">{this.props.date}</p>
              </div>
            </div>
            <div>
              <p className="p-m-0 p-pr-3">{this.props.lastText}</p>
            </div>
            <div>
              <Button
                icon="pi pi-times"
                className="p-button-rounded p-button-danger p-button-outlined p-mr-2"
                tooltip="This feature is not supported in prototype!"
                tooltipOptions={{
                  className: "pink-tooltip",
                  position: "bottom",
                }}
              />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
