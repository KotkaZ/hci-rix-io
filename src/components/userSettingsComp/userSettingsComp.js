import "./userSettingsComp.css";
import {InputSwitch} from "primereact/inputswitch";
import React, {Component} from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

export default class UserSettingsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "lõdvik-lambi@lamp.ee",
            password: "epiclamp",
            checked1: false,
            checked2: true,
            checked3: true,
            checked4: true,
            displayEmail: false,
            displayPassword: false,
            displayDel: false,
            position: "center",
        };
    }

    onClick(name) {
        let state = {
            [`${name}`]: true,
        };

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false,
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button
                    label="Cancel"
                    icon="pi pi-times"
                    onClick={() => this.onHide(name)}
                    className="p-button-text"
                />
                <Button
                    label="Confirm"
                    icon="pi pi-check"
                    onClick={() => this.onHide(name)}
                    autoFocus
                />
            </div>
        );
    }

    render() {
        return (
            <div className="UserSettingsComp">
                <Dialog
                    header="Email"
                    style={{minWidth: "400px"}}
                    visible={this.state.displayEmail}
                    footer={this.renderFooter("displayEmail")}
                    onHide={() => this.onHide("displayEmail")}
                >
                    <div className="p-grid p-fluid">
                        <h5 className="p-field">Old email</h5>
                        <InputText
                            className="p-field"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>

                    <div className="p-grid p-fluid">
                        <h5 className="p-field">New email</h5>
                        <InputText
                            onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>
                </Dialog>

                <Dialog
                    header="Password"
                    style={{minWidth: "400px"}}
                    visible={this.state.displayPassword}
                    footer={this.renderFooter("displayPassword")}
                    onHide={() => this.onHide("displayPassword")}
                >
                    <div className="p-grid p-fluid">
                        <h5 className="p-field">Old password</h5>
                        <InputText
                            className="p-field"
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </div>
                    <div className="p-grid p-fluid">
                        <h5 className="p-field">New password</h5>
                        <InputText
                            className="p-field"
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </div>
                </Dialog>

                <Dialog
                    header="Delete account"
                    style={{minWidth: "400px"}}
                    visible={this.state.displayDel}
                    footer={this.renderFooter("displayDel")}
                    onHide={() => this.onHide("displayDel")}
                />

                <div className="p-grid p-jc-center">
                    <div className="p-col-10">
                        <h2>User Settings</h2>
                        <hr/>
                        <p id="underlineP" onClick={() => this.onClick("displayEmail")}>
                            Change your email
                        </p>
                        <p id="underlineP" onClick={() => this.onClick("displayPassword")}>
                            Reset password
                        </p>
                        <p id="accDel" onClick={() => this.onClick("displayDel")}>
                            Delete your account
                        </p>

                        <h2>Notification Settings</h2>
                        <hr/>

                        <div className="p-grid p-jc-between">
                            <div className="p-col">
                                <label>Allow Direct Messages</label>
                            </div>
                            <div
                                className="p-col-fixed p-d-flex p-jc-end"
                                style={{width: "100px"}}
                            >
                                <InputSwitch
                                    checked={this.state.checked1}
                                    onChange={e => this.setState({checked1: e.value})}
                                />
                            </div>
                        </div>

                        <div className="p-grid p-jc-between">
                            <div className="p-col">
                                <label>Allow email notifications</label>
                            </div>
                            <div
                                className="p-col-fixed p-d-flex p-jc-end"
                                style={{width: "100px"}}
                            >
                                <InputSwitch
                                    checked={this.state.checked2}
                                    onChange={e => this.setState({checked2: e.value})}
                                />
                            </div>
                        </div>

                        <h2>Privacy</h2>
                        <hr/>

                        <div className="p-grid p-jc-between">
                            <div className="p-col">
                                <label>Use two-factor authentication</label>
                            </div>
                            <div
                                className="p-col-fixed p-d-flex p-jc-end"
                                style={{width: "100px"}}
                            >
                                <InputSwitch
                                    checked={this.state.checked3}
                                    onChange={e => this.setState({checked3: e.value})}
                                />
                            </div>
                        </div>

                        <div className="p-grid p-jc-between">
                            <div className="p-col">
                                <label>Allow cookies</label>
                            </div>
                            <div
                                className="p-col-fixed p-d-flex p-jc-end"
                                style={{width: "100px"}}
                            >
                                <InputSwitch
                                    checked={this.state.checked4}
                                    onChange={e => this.setState({checked4: e.value})}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
