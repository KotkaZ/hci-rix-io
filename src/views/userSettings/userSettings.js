import "./userSettings.css";
import UserSettingsComp from "../../components/userSettingsComp/userSettingsComp";
import React from "react";
import {Button} from 'primereact/button';
import {Link} from "react-router-dom";

function UserSettings() {

    return (
        <div className="userSettings">
            <Link to="/"><Button icon="pi pi-times" className="p-button-rounded p-button-text p-button-lg exitButton" /></Link>
            <UserSettingsComp/>
        </div>
    );
}

export default UserSettings;