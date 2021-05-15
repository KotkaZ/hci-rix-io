import "./nav.css";
import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import Userpopup from "../userpopup/userpopup";
import Burger from "../burger/burger";
import { BreadCrumb } from "primereact/breadcrumb";
import history from "../../history";

export default class Nav extends Component {
  render() {
    const items = [{ label: history.location.pathname }];

    const home = {
      icon: "pi pi-home",
      url: "http://localhost:3000/",
    };

    return (
      <div className="Nav ">
        <div className="p-grid p-jc-between nested-grid p-px-2 p-nogutter vertical-container p-align-center">
          <div className="p-col-1 p-xl-4 p-jc-start">
            <Burger />
          </div>

          <div className="p-col-7 p-xl-4 p-fluid">
            <span className="p-input-icon-left p-field p-m-0">
              <i className="pi pi-search" />
              <InputText placeholder="Search" />
            </span>
          </div>

          <div className="p-col-4">
            <div className="p-grid vertical-container p-jc-end p-mr-2 p-ai-center p-nogutter">
              <h3 className="p-m-1 p-pr-3">Lambi Lõdvik</h3>
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
