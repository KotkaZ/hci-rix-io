import "./userProfileBorat.css";
import UserProfileOtherComp from "../../components/userProfileOtherComp/userProfileOtherComp";
import React, { Component } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default class UserProfileOther extends Component {
    constructor(props) {
        super(props);
        this.profileInfo = {
            picture:
                "https://www.indiewire.com/wp-content/uploads/2020/10/borat-2.png",
            nickname: "Borat",
            desc: "Hero from best country Kazakhstan",
            educ: "Best smarts from mother",
            country: { name: "Kazakhstan", code: "KZ" },
            gender: { name: "Male" },
            age: "8",
            regDate: new Date("December 17, 2016 03:24:00"),
            numberOfPosts: 55,
            upvotes: 8974,
            downvotes: 0,
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