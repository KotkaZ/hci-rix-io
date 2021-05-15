import "./userProfileOther.css";
import UserProfileOtherComp from "../../components/userProfileOtherComp/userProfileOtherComp";
import React, { Component } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default class UserProfileOther extends Component {
  constructor(props) {
    super(props);
    this.profileInfo = {
      picture:
        "https://www.thesprucepets.com/thmb/SoEKsH51vUGvtm9keZgDTaDmJgA=/1328x1328/smart/filters:no_upscale()/GettyImages-157563721-581674ad5f9b581c0b41e537.jpg",
      nickname: "Phil",
      desc: "Just your friendly neighbourhood Phil",
      educ: "Monsters High",
      country: { name: "Brazil", code: "BR" },
      gender: { name: "Male" },
      age: "32",
      regDate: new Date("December 17, 2019 03:24:00"),
      numberOfPosts: 55,
      upvotes: 1224,
      downvotes: 41,
    };
  }

  render() {
    return (
      <div className="userProfileOther  p-grid p-nogutter">
        <div className="p-col-12 p-p-3 p-grid p-jc-end p-nogutter">
          <Link to="/" className="link">
            <Button
              icon="pi pi-times"
              className="p-button-rounded p-button-text p-button-lg exitButton"
            />
          </Link>
        </div>
        <div className="p-col-12 p-pb-6">
          <UserProfileOtherComp
            info={this.props.profileInfo || this.profileInfo}
          />
        </div>
      </div>
    );
  }
}
