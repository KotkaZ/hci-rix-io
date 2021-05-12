import "./singleThreadView.css";
import React, {Component} from "react";
import {Avatar} from 'primereact/avatar';
import {Card} from 'primereact/card';


export default class SingleThreadView extends Component {

    render() {
        const header = (
            <div className="p-grid p-jc-between" style={{backgroundColor: this.props.colour}}>
                <div className="p-d-flex p-ml-4 p-mr-0">
                    <Avatar image={this.props.avatar} size="xlarge" shape="circle" className="p-mt-3"/>
                    <div className="p-ml-2">
                        <h3>{this.props.username}</h3>
                        <h3>{this.props.date}</h3>
                    </div>
                </div>
                <h1 className="p-mt-5">{this.props.threadname}</h1>
                <div className="Upvote p-grid p-jc-end p-mr-6 p-mt-3">
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
