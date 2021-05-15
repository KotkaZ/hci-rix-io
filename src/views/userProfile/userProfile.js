import "./userProfile.css";
import UserProfileComp from "../../components/userProfileComp/userProfileComp";
import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="userProfile p-grid p-nogutter">
      <div className="p-col-12 p-p-3 p-grid p-jc-end p-nogutter">
        <Link to="/" className="link">
          <Button
            icon="pi pi-times"
            className="p-button-rounded p-button-text p-button-lg exitButton"
          />
        </Link>
      </div>
      <div className="p-col-12 p-pb-6">
        <UserProfileComp />
      </div>
    </div>
  );
}

export default UserProfile;
