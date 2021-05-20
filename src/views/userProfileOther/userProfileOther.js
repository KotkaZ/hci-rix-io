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
        "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
      nickname: "Lorem",
      desc: "Lorem Ipsum",
      educ: "Lorem High",
      country: { name: "Brazil", code: "BR" },
      gender: { name: "Female" },
      age: "50",
      regDate: new Date("December 17, 2019 03:24:00"),
      numberOfPosts: 100,
      upvotes: 50,
      downvotes: 50,
    };
  }

  render() {
    return (
      <div className="userProfileOther p-grid p-nogutter">
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
