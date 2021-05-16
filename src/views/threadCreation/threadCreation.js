import "./threadCreation.css";
import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { TreeSelect } from "primereact/treeselect";
import treevalues from "../../data/treeselect.json";
import history from "../../history";

export default class ThreadCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNodeKey1: this.props.location,
      values1: [],
    };
    this.data = treevalues;
  }

  submitData(e) {
    history.goBack();
  }

  render() {
    return (
      <div className="ThreadCreation p-grid p-nogutter p-jc-center p-mr-6 p-ml-6">
        <div className="p-col-12 p-md-10 p-fluid">
          <h3>Subject </h3>
          <InputText id="threadName" className="p-field" />
        </div>

        <div className="TextEditorBox p-col-12 p-md-10 p-fluid">
          <div className="p-col-1">
            <h3>Text </h3>
          </div>
          <Editor style={{ height: "320px" }} className="p-mb-3" />
          <h3>Tags</h3>
          <Chips
            id="tags"
            value={this.state.values1}
            onChange={e => this.setState({ values1: e.value })}
            className="p-mb-3"
            separator=","
            tooltip="This feature is not supported in prototype!"
            tooltipOptions={{
              className: "pink-tooltip",
              position: "bottom",
            }}
          />

          <h3>Subforum</h3>
          <TreeSelect
            value={this.state.selectedNodeKey1}
            options={this.data}
            onChange={e => {
              console.log(e.value);
              if (e.value.length > 3) {
                this.setState({ selectedNodeKey1: e.value });
              } else {
                this.setState({ selectedNodeKey1: undefined });
              }
            }}
            filter
            placeholder="Select Location"
          ></TreeSelect>
          <div>
            <Button
              label="Submit"
              loadingoptions={{ position: "right" }}
              className="p-mt-3"
              onClick={e => {
                this.submitData(this);
              }}
            />
            <Button
              label="Cancel"
              loadingoptions={{ position: "right" }}
              className="p-button-secondary p-mt-3 p-mb-4"
              onClick={e => history.goBack()}
            />
          </div>
        </div>
      </div>
    );
  }
}
