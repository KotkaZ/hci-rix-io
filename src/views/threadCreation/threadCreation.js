import "./threadCreation.css";
import React, {Component} from "react";
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {Chips} from "primereact/chips";
import {TreeSelect} from 'primereact/treeselect';
import {Link} from "react-router-dom";



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
                    label: "placeholder1",
                },
                    {
                        key: "0-1",
                        label: "placeholder2",
                    }]
            },
            {
                key: "1",
                label: "Hardware",
                icon: "pi pi-cog",
                children: [
                    {
                        key: "1-0",
                        label: "placeholder3",
                    },
                    {
                        key: "1-1",
                        label: "placeholder4",
                    },
                    {
                        key: "1-2",
                        label: "placeholder5",
                    }]
            },
            {
                key: "2",
                label: "Market",
                icon: "pi pi-money-bill",
                children: [{
                    key: "2-0",
                    label: "placeholder6",
                },
                    {
                        key: "2-1",
                        label: "placeholder7",
                    }]
            },
            {
                key: "3",
                label: "Jobs / Career",
                icon: "pi pi-briefcase",
                children: [
                    {
                        key: "3-0",
                        label: "placeholder8"
                    },
                    {
                        key: "3-1",
                        label: "placeholder9"
                    }]
            }
        ]
    }

    submitData(e) {
        let subforum = e.state.selectedNodeKey1
        console.log("Submitted!",
            {subforum : subforum},
        )
    }

    render() {
        return (
            <div className="ThreadCreation p-grid p-nogutter p-jc-center">
                <div className="p-col-11 p-md-8 p-fluid">
                    <h3>Subject </h3>
                    <InputText id="threadName" className="p-field"/>
                </div>

                <div className="TextEditorBox p-col-11 p-md-8 p-fluid">
                    <div className="p-col-1">
                        <h3>Text </h3>
                    </div>
                    <Editor style={{height: "320px"}} className="p-mb-3"/>
                    <h3>Tags</h3>
                    <Chips
                        id="tags"
                        value={this.state.values1}
                        onChange={e => this.setState({values1: e.value})}
                        className="p-mb-3"
                        separator=","
                    />

                    <h3>Subforum</h3>
                    <TreeSelect
                        value={this.state.selectedNodeKey1}
                        options={this.data}
                        onChange={(e) => {
                            if (e.value.length > 1) {
                                this.setState({selectedNodeKey1: e.value })
                            } else {
                                this.setState({selectedNodeKey1: undefined })
                            }
                        }
                        }
                        filter
                        placeholder="Select Location"></TreeSelect>
                    <div>
                        <Button label="Submit" loadingoptions={{position: "right"}} className="p-mt-3" onClick={(e) => {this.submitData(this)}} />
                        <Link to="/"><Button label="Cancel" loadingoptions={{position: "right"}} className="p-mt-3"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}
