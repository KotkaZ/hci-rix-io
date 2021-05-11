import "./threadCreation.css";
import React, {Component} from "react";
import {InputText} from 'primereact/inputtext';
import {Editor} from 'primereact/editor';
import {Button} from 'primereact/button';
import {Chips} from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';



export default class ThreadCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: true,
            selectedSubforum: null
        };

        this.subforums = [
            { name: 'Software development', code: 'SD' },
            { name: 'Hardware', code: 'HD' },
            { name: 'Market', code: 'MK' },
            { name: 'Jobs / Career', code: 'JC' },
        ];

        this.onSubforumChange = this.onSubforumChange.bind(this);

    }

    onSubforumChange(e) {
        this.setState({ selectedSubforum: e.value });
    }

    render() {
        return (
            <div className="ThreadCreation p-grid p-nogutter p-ml-4">
                <div className="SubjectBox p-col-12">
                    <h3>Subject </h3>
                    <InputText id="threadName" className="p-col-11"/>
                </div>
                <div className="TextEditorBox p-col-11 p-mt-6">
                    <div className="Subjecttext p-col-1">
                        <h3>Text </h3>
                    </div>
                    <Editor style={{height: '320px'}} className="p-mb-6"/>
                    <h3 className="Subjecttext">Tags</h3>
                    <div className="bottomBox">
                        <Chips id="tags" value={this.state.values1} onChange={(e) => this.setState({values1: e.value})}
                               className="p-mb-6" separator=","/>
                        <Dropdown optionLabel="name" value={this.state.selectedSubforum} options={this.subforums} onChange={this.onSubforumChange} placeholder="Select a subforum"/>
                    </div>
                    <div>
                        <Button label="Submit" loadingOptions={{position: 'right'}}/>
                    </div>

                </div>
            </div>
        );
    }
}
