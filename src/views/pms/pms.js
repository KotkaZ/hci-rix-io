import "./pms.css";
import Pm from "../../components/pm/pm";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React, { Component } from "react";
import { Avatar } from 'primereact/avatar';

export default class Pms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'qwer',
            chatPartner: {
                    imgSrc: "https://i.redd.it/v0caqchbtn741.jpg",
                    name:"Unga Punga",
            },
        };
    }
    render() {
        return (
            <div className="Pm">
                <div className="chat-header p-d-block p-p-2 p-d-flex p-ai-center"  style={{fontSize:30, verticalAlign: 'center', position:'sticky', top:0,}}>
                    <Button className="p-button-lg p-m-2" icon="pi pi-chevron-left"/>
                    <Avatar className="p-m-2" image={this.state.chatPartner.imgSrc} shape="circle" size="large"/>
                    {this.state.chatPartner.name}
                </div>
                <div className="messages-box p-d-block p-fluid">
                    <div className="person-profile p-d-block p-text-center p-m-2" style={{fontSize:30}}>
                        <img className="p-d-block p-ml-auto p-mr-auto p-shadow-10" src={this.state.chatPartner.imgSrc} style={{width:'30%', height:"auto", borderRadius:"50%"}} alt="profile"/>
                        {this.state.chatPartner.name}
                    </div>
                    <div className="messages p-d-block">
                        <Pm text="Hello" time="10:15" date="12/05/2021" type="start"/>
                        <Pm text="Hello" time="10:15" date="12/05/2021" type="end"/>
                        <Pm text="You have something that I like" time="10:16" date="12/05/2021" type="start"/>
                        <Pm text="It is 1000€" time="10:17" date="12/05/2021" type="end"/>
                        <Pm text="Let's do 20€" time="10:15" date="12/05/2021" type="start"/>
                        <Pm text="Sounds like a deal" time="10:15" date="12/05/2021" type="end"/>
                        <Pm text="Deal!" time="10:15" date="12/05/2021" type="start"/>
                    </div>
                </div>
                <div className="chat-footer p-d-block p-p-3" style={{position:'sticky', bottom:0,}}>
                    <div className="chat-input-field p-jc-center p-ac-center p-grid">

                        <Button icon="pi pi-star-o" className="p-button-lg"/>
                        <Button icon="pi pi-plus" className="p-button-lg" />
                        <InputText id="in"  className="p-col p-d-inline" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
                        <Button icon="pi pi-chevron-right" className="p-button-lg"/>
                    </div>
                </div>
            </div>

        );
    }
}
