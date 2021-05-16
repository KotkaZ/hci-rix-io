import "./singleThreadView.css";
import React, {Component} from "react";
import loremipsumposts from "../../data/loremipsumposts.json";
import ThreadPost from "../../components/threadpost/threadPost";
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import history from "../../history";

export default class SingleThreadView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectSort: null
        };

    }

    share(site) {
        window.open(site, "_blank")
    }

    render() {
        const data = this.props.posts ? this.props.threads : loremipsumposts;
        const posts = data.map(post => {
            return (
                <div className="p-col-10 p-mb-5">
                    <ThreadPost
                        colour={post.colour}
                        avatar={post.avatar}
                        username={post.username}
                        date={post.date}
                        threadname={post.threadname}
                        threadcontent={post.threadcontent}
                    />
                </div>
            );
        });

        const sortItems = [{name: "Author"}, {name: "Date"}, {name: "Votes"}];

        return (
            <div className="SingleThreadView p-grid p-jc-center p-nogutter">
                <div className="p-col-10 p-my-5 p-grid p-jc-between">
                    <div className="p-grid p-my-auto">
            <span className="p-float-label">
              <Dropdown
                  id="sortBy"
                  value={this.state.selectSort}
                  options={sortItems}
                  onChange={e => this.setState({selectSort: e.value})}
                  optionLabel="name"
                  tooltip="This feature is not supported in prototype!"
                  tooltipOptions={{
                      className: "pink-tooltip",
                      position: "bottom",
                  }}
              />

              <label htmlFor="sortby">Sort by</label>
            </span>

                    </div>
                    <Button className="facebook p-p-0" onClick={() => {
                        this.share("https://www.facebook.com/")
                    }}>
                        <i className="pi pi-facebook p-px-2"/>
                        <span className="p-px-3">Facebook</span>
                    </Button>
                    <Button className="twitter p-p-0" onClick={() => {
                        this.share("https://twitter.com/home")
                    }}>
                        <i className="pi pi-twitter p-px-2"/>
                        <span className="p-px-3">Twitter</span>
                    </Button>
                    <Button className="slack p-p-0" onClick={() => {
                        this.share("https://slack.com/intl/en-ee/")
                    }}>
                        <i className="pi pi-slack p-px-2"/>
                        <span className="p-px-3">Slack</span>
                    </Button>
                    <Button className="discord p-p-0" onClick={() => {
                        this.share("https://discord.com/brand-new")
                    }}>
                        <i className="pi pi-discord p-px-2"/>
                        <span className="p-px-3">Discord</span>
                    </Button>


                    <Button
                        icon="pi pi-plus"
                        label="Reply"
                        className="p-my-auto p-button-raised p-button-text"
                        onClick={() => history.push("/threadCreation")}
                    />
                </div>

                {posts}
            </div>
        );
    }
}
