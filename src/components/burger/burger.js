import "./burger.css";
import React, { Component } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
          <div className="p-d-flex p-jc-center p-my-6">
            <img src={logo} id="logo" alt="Logo"></img>
          </div>

          <Link className="link" to="/trending">
            <h3 className="p-m-4 p-pb-4"> Trending</h3>
          </Link>

          <Link className="link" to="/software">
            <h3 className="p-m-4"> Software development </h3>
          </Link>
          <Link className="link" to="/hardware">
            <h3 className="p-m-4"> Hardware </h3>
          </Link>
          <Link className="link" to="/market">
            <h3 className="p-m-4"> Market </h3>
          </Link>
          <Link className="link" to="/jobs">
            <h3 className="p-m-4"> Jobs / Career </h3>
          </Link>
        </div>
      </div>
    );
  }
}
