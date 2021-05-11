import "./nav.css";
import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import Userpopup from "../userpopup/userpopup";
import Burger from "../burger/burger";
import { BreadCrumb } from "primereact/breadcrumb";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: true,
    };
  }

  items = [
    { label: "Categories" },
    { label: "Sports" },
    { label: "Football" },
    { label: "Countries" },
    { label: "Spain" },
    { label: "F.C. Barcelona" },
    { label: "Squad" },
    {
      label: "Lionel Messi",
      url: "https://en.wikipedia.org/wiki/Lionel_Messi",
    },
  ];

  home = { icon: "pi pi-home", url: "https://www.primefaces.org/primereact" };

  render() {
    const items = [
      { label: "Jobs/career" },
      { label: "Noital" },
      { label: "Lodon" },
    ];

    const home = {
      icon: "pi pi-home",
      url: "https://www.primefaces.org/primereact",
    };

    return (
      <div className="Nav ">
        <div className="p-grid p-jc-between nested-grid p-p-2 p-nogutter vertical-container p-align-center">
          <div className="p-col-2 p-jc-start">
            <Burger />
          </div>

          <div className="p-col-4 p-fluid">
            <span className="p-input-icon-left p-field p-m-0">
              <i className="pi pi-search" />
              <InputText placeholder="Search" />
            </span>
          </div>

          <div className="p-col-4 p-md-2">
            <div className="p-grid vertical-container p-jc-end p-mr-2 p-ai-center p-nogutter">
              <h3 class="p-mr-3">Lambi Lõdvik</h3>
              <Userpopup className="p-ml-2" />
            </div>
          </div>
        </div>

        <div className="card p-shadow-10">
          <BreadCrumb model={items} home={home} />
        </div>
      </div>
    );
  }
}
