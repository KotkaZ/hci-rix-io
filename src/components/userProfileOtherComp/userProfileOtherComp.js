import "./userProfileOtherComp.css";
import React, {Component} from 'react';
import {Avatar} from 'primereact/avatar';

export default class UserProfileOtherComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: props.info.picture,
            nickname: props.info.nickname,
            desc: props.info.desc,
            educ: props.info.educ,
            country: props.info.country,
            gender: props.info.gender,
            age: props.info.age,
            regDate: props.info.regDate,
            numberOfPosts: props.info.numberOfPosts,
            upvotes: props.info.upvotes,
            downvotes: props.info.downvotes,

        };
    }


    timeBetweenInDays(date1, date2) {
        let Difference_In_Time = date2.getTime() - date1.getTime();
        return Difference_In_Time / (1000 * 3600 * 24);
    }

    render() {
        return (

            <div className="UserProfileOtherComp">
                <div className="p-grid p-jc-center">

                    <div className="p-col-10">
                        <div className="p-grid p-justify-center">
                            <Avatar
                                image={this.state.picture}
                                className="p-mr-2 p-overlay" size="xlarge" shape="circle"/>
                        </div>


                        <h2>General</h2>
                        <hr/>

                        <div className="p-fluid p-field">
                            <h5>Nickname</h5>
                            <label>{this.state.nickname}</label>
                            <h5>Description</h5>
                            <p>{this.state.desc}</p>

                        </div>

                        <h2>Biography</h2>
                        <hr/>
                        <div className="p-fluid p-field">

                            <h5>Education</h5>
                            <label>{this.state.educ}</label>


                            <h5>Country</h5>
                            <div className="country-item">
                                <img alt={this.state.country.name} src={`https://www.countryflags.io/${this.state.country.code}/flat/64.png`}
                                     onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                     className={`flag flag-${this.state.country.code.toLowerCase()}`}/>
                                <div>{this.state.country.name}</div>
                            </div>


                            <h5>Gender</h5>
                            <label>{this.state.gender.name}</label>
                            <h5>Age</h5>
                            <label>{this.state.age}</label>
                        </div>

                        <h2>Statistics</h2>
                        <hr/>
                        <div className="p-fluid p-field">
                            <h5>Registration Date</h5>
                            <label>{this.state.regDate.toDateString()}</label>

                            <h5>Days since first registering</h5>
                            <label>{Math.floor(this.timeBetweenInDays(this.state.regDate, new Date()))}</label>

                            <h5>Number of posts</h5>
                            <label>{this.state.numberOfPosts}</label>

                            <h5>Upvotes received</h5>
                            <label>{this.state.upvotes}</label>

                            <h5>Downvotes received</h5>
                            <label>{this.state.downvotes}</label>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}