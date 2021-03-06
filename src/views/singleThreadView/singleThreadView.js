import "./singleThreadView.css";
import React, { Component } from "react";
import loremipsumposts from "../../data/loremipsumposts.json";
import ThreadPost from "../../components/threadpost/threadPost";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";

export default class SingleThreadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      selectSort: null,
      displayMaximizable: false,
    };
  }
  renderFooter(name) {
    return (
      <div>
        <Button
          label="Discard"
          icon="pi pi-times"
          onClick={() => {
            this.setState({ displayMaximizable: false });
          }}
          tooltip="This feature is not supported in prototype!"
          tooltipOptions={{
            className: "pink-tooltip",
            position: "bottom",
          }}
          className="p-button-text"
        />
        <Button
          label="Reply"
          icon="pi pi-check"
          onClick={() => {
            this.setState({ displayMaximizable: false });
          }}
          tooltip="This feature is not supported in prototype!"
          tooltipOptions={{
            className: "pink-tooltip",
            position: "bottom",
          }}
          autoFocus
        />
      </div>
    );
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
            profileLink={post.profileLink}
          />
        </div>
      );
    });

    const sortItems = [{ name: "Author" }, { name: "Date" }, { name: "Votes" }];

    return (
      <div className="SingleThreadView p-grid p-jc-center p-nogutter">
        <div className="p-col-10 p-my-5 p-grid p-jc-between">
          <div className="p-grid p-my-auto">
            <span className="p-float-label">
              <Dropdown
                id="sortBy"
                value={this.state.selectSort}
                options={sortItems}
                onChange={e => this.setState({ selectSort: e.value })}
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
          <Button
            icon="pi pi-plus"
            label="Reply"
            className="p-my-auto p-button-raised p-button-text"
            onClick={() => {
              this.setState({ displayMaximizable: true });
            }}
          />
          <Dialog
            header="Reply"
            className="p-d-flex"
            visible={this.state.displayMaximizable}
            maximizable
            modal
            style={{ width: "50vw" }}
            footer={this.renderFooter("displayMaximizable")}
            onHide={() => {
              this.setState({ displayMaximizable: false });
            }}
          >
            <InputTextarea
              className={`inputtext_value p-col-12`}
              value={this.state.value1}
              onChange={e => this.setState({ value1: e.target.value })}
              autoResize
            />
          </Dialog>
        </div>

        {posts}
      </div>
    );
  }
}
