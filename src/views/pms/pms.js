import "./pms.css";
import Pm from "../../components/pm/pm";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import React, {Component} from "react";
import {Avatar} from 'primereact/avatar';

export default class Pms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            chatPartner: {
                imgSrc: "https://i.redd.it/v0caqchbtn741.jpg",
                name: "Unga Punga",
            },
        };
        this.keyPress = this.keyPress.bind(this);
        this.ref = React.createRef();

        this.textMessages = [
            {
                text: "Hello",
                time: "10:15",
                date: "12/05/2021",
                type: "start"
            },
            {
                text: "Hello",
                time: "10:15",
                date: "12/05/2021",
                type: "end"
            },
            {
                text: "You have something that I like",
                time: "10:16",
                date: "12/05/2021",
                type: "start"
            },
            {
                text: "It is 1000 dollarydoos",
                time: "10:17",
                date: "12/05/2021",
                type: "end"
            },
            {
                text: "20 dollarydoos take it or leave it",
                time: "10:18",
                date: "12/05/2021",
                type: "start"
            },
            {
                text: "You have made an offer I can't refuse",
                time: "10:25",
                date: "12/05/2021",
                type: "end"
            },
            {
                text: "yes",
                time: "10:29",
                date: "12/05/2021",
                type: "start"
            }
        ]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    sendDM (e) {
        let date = new Date();
        this.textMessages.push({
            text: e,
            time: date.getHours() + ":" + date.getUTCDate(),
            date: date.toLocaleDateString(),
            type: "end"
        })
        this.setState(this.state)
    }

    keyPress(e){
        if(e.keyCode == 13){
            this.sendDM(this.ref.current.value)
        }
    }


    render() {
        const dms = this.textMessages.map(dm => {
            return (
                <div className="p-col-10 p-mb-5">
                    <Pm
                        text={dm.text}
                        time={dm.time}
                        date={dm.date}
                        type={dm.type}
                    />
                </div>
            );
        });

        return (
            <div className="Pm p-grid p-jc-center">
                <div className="p-col-12 p-md-9">
                    <div className="chat-header p-d-block p-p-2 p-d-flex p-ai-center"
                         style={{fontSize: 30, verticalAlign: 'center', position: 'sticky', top: 0,}}>
                        {/*<Button className="p-button-lg p-m-2" icon="pi pi-chevron-left"/>*/}
                        <Avatar className="p-m-2" image={this.state.chatPartner.imgSrc} shape="circle" size="large"/>
                        {this.state.chatPartner.name}
                    </div>
                    <div className="messages-box p-d-block p-fluid">
                        <div className="person-profile p-d-block p-text-center p-m-2" style={{fontSize: 30}}>
                            <img className="p-d-block p-ml-auto p-mr-auto p-shadow-10"
                                 src={this.state.chatPartner.imgSrc}
                                 style={{width: '30%', maxWidth: '400px', height: "auto", borderRadius: "50%"}}
                                 alt="profile"/>
                            {this.state.chatPartner.name}
                        </div>
                        <div className="messages p-d-block">
                            {dms}
                        </div>
                    </div>
                    <div className="chat-footer p-d-block p-p-3" style={{position: 'sticky', bottom: 0,}}>
                        <div className="chat-input-field p-jc-center p-ac-center p-grid">

                            <Button icon="pi pi-star-o" className="p-button-lg p-m-1"/>
                            <Button icon="pi pi-plus" className="p-button-lg p-m-1"/>
                            <InputText id="in" className="p-col p-d-inline p-m-1" ref={this.ref} onKeyDown={this.keyPress}/>
                            <Button icon="pi pi-chevron-right" className="p-button-lg p-m-1" onClick={(e) => this.sendDM(this.ref.current.value)}/>
                        </div>
                        <div style={{ float:"left", clear: "both" }}
                             ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
