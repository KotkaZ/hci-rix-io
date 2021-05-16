import "./pm.css";
import React, {Component} from "react";

// <Pm text="Hello World!" time="15:15" date="12/12/12" type="{start|end}"/>
export default class pm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: 1,
            chatPartner: {
                imgSrc: "",
                name: "",
            },
        };
    }


    render() {
        return (
            <div className="Pm p-d-block">
                <div className={`message ${this.props.type}-type p-p-3 p-grid p-justify-${this.props.type}`}>
                    <div style={{width: '10rem'}} style={{maxWidth: "35vw"}} className="message-box p-p-3 p-mb-0 p-shadow-3 p-flex-wrap">
                        <p className="p-m-0 p-jc-center">{this.props.text}</p>
                    </div>
                    <p className="message-datetime p-col-12"> {this.props.time} {this.props.date}</p>
                </div>
            </div>
        );
    }
}
