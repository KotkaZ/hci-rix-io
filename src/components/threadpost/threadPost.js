import "./threadPost.css";
import React, {Component} from "react";
import {Avatar} from "primereact/avatar";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import history from "../../history";
import {ConfirmPopup, confirmPopup} from 'primereact/confirmpopup';
import {Toast} from 'primereact/toast';
import {Link} from "react-router-dom";

export default class ThreadPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    share(site) {
        window.open(site, "_blank")
    }

    render() {
        const header = (
            <div className="p-grid p-jc-between ">

                <Link className="link p-d-flex p-ml-4 p-mr-0" to="/userProfileOther">
                    <Avatar
                        image={this.props.avatar}
                        size="large"
                        shape="circle"
                        className="p-mt-3"
                        onClick={() => history.push("/userProfileOther")}
                    />

                    <div className="p-ml-2 p-mt-3">
                        <h3 className="p-m-0">{this.props.username}</h3>
                        <p className="p-m-0">{this.props.date}</p>
                    </div>
                </Link>


                <h2 className="p-my-auto">{this.props.threadname}</h2>
                <div className="Upvote p-grid p-jc-end p-mr-4 p-mt-3">
                    <Button
                        icon="pi pi-arrow-up"
                        label="281"
                        className="p-button-rounded p-button-success p-button-outlined p-mr-2"
                        tooltip="This feature is not supported in prototype!"
                        tooltipOptions={{
                            className: "pink-tooltip",
                            position: "bottom",
                        }}
                    />
                    <Button
                        icon="pi pi-arrow-down"
                        label="281"
                        className="p-button-rounded p-button-danger p-button-outlined"
                        tooltip="This feature is not supported in prototype!"
                        tooltipOptions={{
                            className: "pink-tooltip",
                            position: "bottom",
                        }}
                    />
                </div>
            </div>
        );
        return (
            <div className="ThreadPost p-grid">
                <Card
                    header={header}
                    className={`p-col-12 ${
                        this.props.threadname ? "mainThread" : "post"
                    }`}
                >
                    <p>{this.props.threadcontent}</p>
                    {this.props.threadname && <div>
                        <ConfirmPopup target={document.getElementById('button')} visible={this.state.visible}
                                      onHide={() => this.setState({visible: false})}
                                      message=<div><Button className="facebook p-p-0 p-mr-2" onClick={() => {
                            this.share("https://www.facebook.com/")
                        }}>
                            <i className="pi pi-facebook p-px-2"/>
                            <span className="p-px-3">Facebook</span>
                        </Button>
                            <Button className="twitter p-p-0 p-mr-2" onClick={() => {
                                this.share("https://twitter.com/home")
                            }}>
                                <i className="pi pi-twitter p-px-2"/>
                                <span className="p-px-3">Twitter</span>
                            </Button>
                            <Button className="slack p-p-0 p-mr-2" onClick={() => {
                                this.share("https://slack.com/intl/en-ee/")
                            }}>
                                <i className="pi pi-slack p-px-2"/>
                                <span className="p-px-3">Slack</span>
                            </Button>
                            <Button className="discord p-p-0 p-mr-2" onClick={() => {
                                this.share("https://discord.com/brand-new")
                            }}>
                                <i className="pi pi-discord p-px-2"/>
                                <span className="p-px-3">Discord</span>
                            </Button></div>
                        />

                        <Button className="p-d-block p-ml-auto" id="button" onClick={() => this.setState({visible: true})} icon="pi pi-share-alt"/>
                        </div>}
                </Card>
            </div>
        );
    }
}
