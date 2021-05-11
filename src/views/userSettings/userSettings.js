import "./userSettings.css";
import {InputSwitch} from "primereact/inputswitch";
import UserSettingsComp from "../../components/userSettingsComp/userSettingsComp";
import React from "react";

function UserSettings() {

    return (
        <div className="userSettings">
            <UserSettingsComp/>
        </div>
    );
}

export default UserSettings;