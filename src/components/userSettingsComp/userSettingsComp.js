import "./userSettingsComp.css";
import {InputSwitch} from "primereact/inputswitch";
import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

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
            position: 'center'
        };
    }

    onClick(name) {
        let state = {
            [`${name}`]: true
        };

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-text"/>
                <Button label="Confirm" icon="pi pi-check" onClick={() => this.onHide(name)} autoFocus/>
            </div>
        );
    }


    render() {
        return (

            <div className="UserSettingsComp">
                <Dialog header="Email" visible={this.state.displayEmail} style={{width: '50vw'}}
                        footer={this.renderFooter('displayEmail')} onHide={() => this.onHide('displayEmail')}>
                    <h5>Old email</h5>
                    <InputText value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    <h5>New email</h5>
                    <InputText onChange={(e) => this.setState({email: e.target.value})}/>
                </Dialog>

                <Dialog header="Password" visible={this.state.displayPassword} style={{width: '50vw'}}
                        footer={this.renderFooter('displayPassword')} onHide={() => this.onHide('displayPassword')}>
                    <h5>Old password</h5>
                    <InputText onChange={(e) => this.setState({password: e.target.value})}/>
                    <h5>New password</h5>
                    <InputText onChange={(e) => this.setState({password: e.target.value})}/>
                </Dialog>

                <Dialog header="Delete account" visible={this.state.displayDel} style={{width: '50vw'}}
                        footer={this.renderFooter('displayDel')} onHide={() => this.onHide('displayDel')}>
                </Dialog>

                <div className="p-grid p-justify-center">
                    <div className="p-col-12 p-md-6 p-lg-3">
                        <h2>User Settings</h2>
                        <hr/>
                        <p onClick={() => this.onClick('displayEmail')}>Change your email</p>
                        <p onClick={() => this.onClick('displayPassword')}>Reset password</p>
                        <a id="accDel" onClick={() => this.onClick('displayDel')}>Delete your account</a>
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