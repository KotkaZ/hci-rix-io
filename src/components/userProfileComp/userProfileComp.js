import "./userProfileComp.css";
import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Avatar} from 'primereact/avatar';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';

export default class UserProfileComp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nickDisabled: true,
            descDisabled: true,
            educDisabled: true,
            countryDisabled: true,
            genderDisabled: true,
            ageDisabled: true,
            nickname: "Lõdvik",
            desc: "lore ipsum...",
            educ: "Random inc Highschool",
            country: {name: 'Spain', code: 'ES'},
            gender: {name: 'Male'},
            age: 25,
            regDate: new Date('December 17, 2020 03:24:00'),
            numberOfPosts: 46,
            upvotes: 152,
            downvotes: 43,
            regDays: 22


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

            <div className="UserProfileComp">
                <div className="p-grid p-jc-center">

                    <div className="p-col-10">
                        <div className="p-grid p-justify-center">
                            <Avatar
                                image="https://i.guim.co.uk/img/media/976161556e63867b492868c15e86ea71b4165c52/0_165_5315_3189/master/5315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b4e203c07941288dab171a18905ad374"
                                className="p-mr-2 p-overlay" size="xlarge" shape="circle"/>
                            <Button icon="pi pi-pencil" className="p-button-rounded p-button-text"/>
                        </div>


                        <h2>General</h2>
                        <hr/>

                        <div className="p-fluid p-field">
                            <h5>Nickname<Button icon="pi pi-pencil" className="p-button-rounded p-button-text"
                                                onClick={() => this.toggleDisabled("nickDisabled", false)}/></h5>
                            <InputText value={this.state.nickname}
                                       onChange={(e) => this.setState({nickname: e.target.value})} placeholder="Search"
                                       disabled={this.state.nickDisabled}/>
                            {!this.state.nickDisabled &&
                            <Button icon="pi pi-check" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("nickDisabled", true);
                            }}/>}
                            {!this.state.nickDisabled &&
                            <Button icon="pi pi-times" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("nickDisabled", true);
                            }}/>}


                            <h5>Description<Button icon="pi pi-pencil" className="p-button-rounded p-button-text"
                                                   onClick={() => this.toggleDisabled("descDisabled", false)}/></h5>

                            <InputTextarea value={this.state.desc}
                                           onChange={(e) => this.setState({desc: e.target.value})} placeholder="Search"
                                           disabled={this.state.descDisabled}/>
                            {!this.state.descDisabled &&
                            <Button icon="pi pi-check" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("descDisabled", true);
                            }}/>}
                            {!this.state.descDisabled &&
                            <Button icon="pi pi-times" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("descDisabled", true);
                            }}/>}

                        </div>

                        <h2>Biography</h2>
                        <hr/>
                        <div className="p-fluid p-field">

                            <h5>Education<Button icon="pi pi-pencil" className="p-button-rounded p-button-text"
                                                 onClick={() => this.toggleDisabled("educDisabled", false)}/></h5>
                            <InputText
                                value={this.state.educ}
                                onChange={(e) => this.setState({educ: e.target.value})} placeholder="Search"
                                disabled={this.state.educDisabled}/>
                            {!this.state.educDisabled &&
                            <Button icon="pi pi-check" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("educDisabled", true);
                            }}/>}
                            {!this.state.educDisabled &&
                            <Button icon="pi pi-times" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("educDisabled", true);
                            }}/>}

                            <h5>Country<Button icon="pi pi-pencil" className="p-button-rounded p-button-text"
                                               onClick={() => this.toggleDisabled("countryDisabled", false)}/></h5>
                            <Dropdown value={this.state.country} options={this.countries}
                                      onChange={(e) => this.setState({country: e.value})} optionLabel="name" filter
                                      filterBy="name"
                                      valueTemplate={this.selectedCountryTemplate}
                                      itemTemplate={this.countryOptionTemplate}
                                      disabled={this.state.countryDisabled}/>
                            {!this.state.countryDisabled &&
                            <Button icon="pi pi-check" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("countryDisabled", true);
                            }}/>}
                            {!this.state.countryDisabled &&
                            <Button icon="pi pi-times" className="p-button-rounded p-button-text" onClick={() => {
                                this.toggleDisabled("countryDisabled", true);
                            }}/>}

                            <h5>Gender</h5>
                            <Dropdown value={this.state.gender} options={[{name: 'Male'}, {name: 'Female'}]}
                                      onChange={(e) => this.setState({gender: e.target.value})} optionLabel="name"
                                      disabled={this.state.genderDisabled}/>
                            <h5>Age</h5>
                            <InputNumber mode="decimal"
                                         useGrouping={false}
                                         value={this.state.age}
                                         onValueChange={(e) => this.setState({age: e.target.value})}
                                         placeholder="Search"
                                         disabled={this.state.ageDisabled}
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