import "./userProfile.css";
import UserProfileComp from "../../components/userProfileComp/userProfileComp";
import React from "react";
import {Button} from 'primereact/button';
import {Link} from "react-router-dom";

function UserProfile() {

    return (
        <div className="userProfile">
            <Link to="/"><Button icon="pi pi-times" className="p-button-rounded p-button-text p-button-lg exitButton" /></Link>
            <UserProfileComp/>
        </div>
    );
}

export default UserProfile;