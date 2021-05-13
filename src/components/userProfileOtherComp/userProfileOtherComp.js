import "./userProfileOtherComp.css";
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Avatar} from 'primereact/avatar';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';

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
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];
    }

    toggleDisabled(name, value) {
        let state = {
            [`${name}`]: value
        };

        this.setState(state);
    }

    selectedCountryTemplate(option, props) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src={`https://www.countryflags.io/${option.code}/flat/32.png`}
                         onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                         className={`flag flag-${option.code.toLowerCase()}`}/>
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    countryOptionTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src={`https://www.countryflags.io/${option.code}/flat/32.png`}
                     onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                     className={`flag flag-${option.code.toLowerCase()}`}/>
                <div>{option.name}</div>
            </div>
        );
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
                            <InputText value={this.state.nickname}
                                       onChange={(e) => this.setState({nickname: e.target.value})} placeholder="Search"
                                       disabled/>
                            <h5>Description</h5>
                            <InputTextarea value={this.state.desc}
                                           onChange={(e) => this.setState({desc: e.target.value})} placeholder="Search"
                                           disabled/>

                        </div>

                        <h2>Biography</h2>
                        <hr/>
                        <div className="p-fluid p-field">

                            <h5>Education</h5>
                            <InputText
                                value={this.state.educ}
                                onChange={(e) => this.setState({educ: e.target.value})} placeholder="Search"
                                disabled/>


                            <h5>Country</h5>
                            <Dropdown value={this.state.country} options={this.countries}
                                      onChange={(e) => this.setState({country: e.value})} optionLabel="name" filter
                                      filterBy="name"
                                      valueTemplate={this.selectedCountryTemplate}
                                      itemTemplate={this.countryOptionTemplate}
                                      disabled/>


                            <h5>Gender</h5>
                            <Dropdown value={this.state.gender} options={[{name: 'Male'}, {name: 'Female'}]}
                                      onChange={(e) => this.setState({gender: e.target.value})} optionLabel="name"
                                      disabled/>
                            <h5>Age</h5>
                            <InputNumber mode="decimal"
                                         useGrouping={false}
                                         value={this.state.age}
                                         onValueChange={(e) => this.setState({age: e.target.value})}
                                         placeholder="Search"
                                         disabled
                                         min={16} max={150}/>
                        </div>

                        <h2>Statistics</h2>
                        <hr/>
                        <div className="p-fluid p-field">
                            <h5>Registration Date</h5>
                            <InputText
                                value={this.state.regDate.toDateString()}
                                onChange={(e) => this.setState({regDate: e.target.value})} placeholder="0"
                                disabled/>

                            <h5>Days since first registering</h5>
                            <InputText
                                value={Math.floor(this.timeBetweenInDays(this.state.regDate, new Date()))}
                                onChange={(e) => this.setState({regDate: e.target.value})} placeholder="0"
                                disabled/>

                            <h5>Number of posts</h5>
                            <InputText
                                value={this.state.numberOfPosts}
                                onChange={(e) => this.setState({regDate: e.target.value})} placeholder="0"
                                disabled/>

                            <h5>Upvotes received</h5>
                            <InputText
                                value={this.state.upvotes}
                                onChange={(e) => this.setState({regDate: e.target.value})} placeholder="0"
                                disabled/>

                            <h5>Downvotes received</h5>
                            <InputText
                                value={this.state.downvotes}
                                onChange={(e) => this.setState({regDate: e.target.value})} placeholder="0"
                                disabled/>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}