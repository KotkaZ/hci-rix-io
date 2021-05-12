import "./burger.css";
import React, { Component } from "react";
import { Button } from "primereact/button";

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div className="Burger">
        <Button
          icon={`pi ${this.state.checked ? "pi-times" : "pi-bars"}`}
          className="bbars p-button-lg p-button-rounded p-button-text"
          onClick={e => {
            this.setState({ checked: !this.state.checked });
          }}
        />
        <div className={`Siderbar ${this.state.checked ? "open" : "close"}`}>
          <h3 className="p-m-4 p-pb-4"> Trending </h3>
          <h3 className="p-m-4"> Software development </h3>
          <h3 className="p-m-4"> Hardware </h3>
          <h3 className="p-m-4"> Market </h3>
          <h3 className="p-m-4"> Jobs / Career </h3>
        </div>
      </div>
    );
  }
}
