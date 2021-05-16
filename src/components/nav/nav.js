import "./nav.css";
import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import Userpopup from "../userpopup/userpopup";
import Burger from "../burger/burger";
import { BreadCrumb } from "primereact/breadcrumb";

export default class Nav extends Component {
  render() {
    const items = [
      { label: "Not" },
      { label: "Supported" },
      { label: "In" },
      { label: "Prototype" },
    ];

    const home = {
      icon: "pi pi-home",
      url: "/",
    };

    return (
      <div className="Nav ">
        <div className="p-grid p-jc-between nested-grid p-px-2 p-nogutter vertical-container p-align-center">
          <div className="p-col-1 p-xl-4 p-jc-start">
            <Burger />
          </div>

          <div className="p-col-6 p-xl-4 p-fluid">
            <span className="p-input-icon-left p-field p-m-0">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search"
                tooltip="This feature is not supported in prototype!"
                tooltipOptions={{
                  className: "pink-tooltip",
                  position: "bottom",
                }}
              />
            </span>
          </div>

          <div className="p-col-4">
            <div className="p-grid vertical-container p-jc-end p-mr-2 p-pt-1 p-ai-center p-nogutter">
              <h3 className="avatar-name p-m-0 p-pr-2">Lambi Lõdvik</h3>
              <Userpopup />
            </div>
          </div>
        </div>

        <div className="card p-shadow-3">
          <BreadCrumb className="p-px-16 p-py-2" model={items} home={home} />
        </div>
      </div>
    );
  }
}
