import React, {Component} from "react";
import {Avatar} from 'primereact/avatar';
import {Card} from 'primereact/card';
import { PrimeIcons } from 'primereact/api';


export default class SingleThreadView extends Component {

    render() {
        const header = (
            <div className="p-d-flex" style={{backgroundColor: 'salmon'}}>
                <Avatar image={this.props.avatar} size="xlarge" shape="circle" className="p-mr-2" />
                <div>
                    <h3>{this.props.username}</h3>
                    <h3>{this.props.date}</h3>
                </div>
                <h1>{this.props.threadname}</h1>
                <div className="p-fluid">
                    <i className="pi pi-arrow-circle-up" style={{'fontSize': '4em'}}></i>
                    <i className="pi pi-arrow-circle-down" style={{'fontSize': '4em'}}></i>
                </div>
            </div>
    );
        return (
            <div className="SingleThreadView p-grid">
                <Card header={header} className="p-col-12">
                    <p>{this.props.threadcontent}</p>
                </Card>
            </div>

        );
    }

    constructor(props) {
        super(props);
        this.state = {
            placeholder: null
        };

    }
}
