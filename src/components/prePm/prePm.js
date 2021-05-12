import "./prePm.css";
import React, {Component} from "react";
import {Avatar} from 'primereact/avatar';
import {Link} from "react-router-dom";

// <PrePm name="John Doe" imgSrc="...."/>
export default class PrePm extends Component {
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

    goToChat = () => {
        console.log("klicked")
    }

    hoverStart = () => {
        this.setState({isHover: 5});
    }

    hoverEnd = () => {
        this.setState({isHover: 1});
    }

    render() {

        return (
            <div className="PrePm p-d-block">
                <Link className="link" to="/Unga_Punga">
                    <div className={`p-d-block p-p-2 p-d-flex p-ai-center p-shadow-${this.state.isHover}`}
                         style={{fontSize: 30, verticalAlign: 'center',}}
                         onMouseEnter={this.hoverStart}
                         onMouseLeave={this.hoverEnd}
                         onClick={this.goToChat}
                    >
                        <Avatar className="p-m-2" image={this.props.imgSrc} shape="circle" size="large"/>
                        {this.props.name}
                    </div>
                </Link>
            </div>
        );
    }
}