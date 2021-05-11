import "./userSettingsComp.css";
import {InputSwitch} from "primereact/inputswitch";
import React, {Component} from 'react';

export default class UserSettingsComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: true,
            checked3: true,
            checked4: true
        };
    }

    render() {
        return (
            <div className="UserSettingsComp">
                <div className="p-grid p-justify-center">
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <h2>User Settings</h2>
                        <hr/>
                        <p>Change your email</p>
                        <p>Reset password</p>
                        <a id="accDel">Delete your account</a>
                        <h2>Notification Settings</h2>
                        <hr/>

                        <div className="p-fluid ">
                            <div className="p-field p-grid">
                                <label className="p-col-6 p-md-6 p-lg-9">Allow Direct Messages</label>
                                <div className="p-col-3 p-md-2 p-lg-3">
                                    <InputSwitch
                                        checked={this.state.checked1}
                                        onChange={(e) => this.setState({checked1: e.value})}
                                    />
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label className="p-col-6 p-md-6 p-lg-9">Allow email notifications</label>
                                <div className="p-col-3 p-md-2 p-lg-3">
                                    <InputSwitch
                                        checked={this.state.checked2}
                                        onChange={(e) => this.setState({checked2: e.value})}
                                    />
                                </div>
                            </div>
                        </div>
                        <h2>Privacy</h2>
                        <hr/>
                        <div className="p-fluid">
                            <div className="p-field p-grid">
                                <label className="p-col-6 p-md-6 p-lg-9">Use two-factor authentication</label>
                                <div className="p-col-3 p-md-2 p-lg-3">
                                    <InputSwitch
                                        checked={this.state.checked3}
                                        onChange={(e) => this.setState({checked3: e.value})}
                                    />
                                </div>
                            </div>
                            <div className="p-field p-grid">
                                <label className="p-col-6 p-md-6 p-lg-9">Allow cookies</label>
                                <div className="p-col-3 p-md-2 p-lg-3">
                                    <InputSwitch
                                        checked={this.state.checked4}
                                        onChange={(e) => this.setState({checked4: e.value})}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}