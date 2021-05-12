import "./threadCreation.css";
import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { TreeSelect } from 'primereact/treeselect';


export default class ThreadCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNodeKey1: this.props.location,
    };
    this.data = [
        {
          key: "0",
          label: "Software Development",
          icon: "pi pi-desktop",
          children: [{
            key: "0-0",
            label: "placeholder",
            children: [
              { key: "0-0-0",
                label: "placeholder",
              },
              { key: "0-0-1",
                label: "placeholder",
              }]
          },
            {
              key: "0-1",
              label: "placeholder",
              children: [
                  { key: "0-1-0",
                    label: "placeholder",
                  }]
            }]
        },
        {
          key: "1",
          label: "Hardware",
          icon: "pi pi-cog",
          children: [
            { key: "1-0",
              label: "placeholder",
            },
            { key: "1-1",
              label: "placeholder",
            },
            { key: "1-2",
              label: "placeholder",
            }]
        },
        {
          key: "2",
          label: "Market",
          icon: "pi pi-money-bill",
          children: [{
            key: "2-0",
            label: "placeholder",
            children: [
              { key: "2-0-0",
                label: "placeholder",
              },
              { key: "2-0-1",
                label: "placeholder",
              }]
          },
            {
              key: "2-1",
              label: "placeholder",
              children: [
                { key: "2-1-0",
                  label: "placeholder",
                },
                { key: "2-1-1",
                  label: "placeholder",
                }]
            }]
        },
      {
        key: "3",
        label: "Jobs / Career",
        icon: "pi pi-briefcase",
        children: [
            { key: "3-1-0",
              label: "placeholder"
            },
            { key: "3-1-1",
              label: "placeholder"
            }]
      }
      ]
    }




  render() {
    return (
      <div className="ThreadCreation p-grid p-nogutter p-jc-center">
        <div className="p-col-11 p-md-8 p-fluid">
          <h3>Subject </h3>
          <InputText id="threadName" className="p-field" />
        </div>

        <div className="TextEditorBox p-col-11 p-md-8 p-fluid">
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
          />

          <h3>Subforum</h3>
          <TreeSelect
              value={this.state.selectedNodeKey1}
              options={this.data}
              onChange={(e) => this.setState({ selectedNodeKey1: e.value })}
              filter
              placeholder="Select Location"></TreeSelect>
          <div>
            <Button label="Submit" loadingOptions={{ position: "right" }} />
          </div>
        </div>
      </div>
    );
  }
}
