import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";

import React, { Component } from "react";
import Threadheader from "../../components/threadheader/threadheader";
import loremipsumthreads from "../../data/loremipsumthreads.json";
import history from "../../history";
import "./threadsView.css";

export default class ThreadsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicFirst: 0,
      basicRows: 10,
      selectSort: null,
      values1: [],
    };
    this.toast = React.createRef();
  }

  onBasicPageChange(event) {
    console.log(event);
    this.setState({ basicFirst: event.first });
    this.setState({ basicRows: event.rows });
  }

  render() {
    const sortItems = [
      { name: "Title" },
      { name: "Author" },
      { name: "Date created" },
      { name: "Last post" },
      { name: "Replies" },
      { name: "Views" },
      { name: "Votes" },
      { name: "Upvotes" },
      { name: "Downvotes" },
    ];

    const data = this.props.threads ? this.props.threads : loremipsumthreads;
    if (this.props.newThread) data.push(this.props.newThread);
    const threads = data.map(thread => {
      return (
        <Threadheader
          title={thread.title}
          author={thread.author}
          avatar={thread.avatar}
          replies={thread.replies}
          views={thread.views}
          lastpost={thread.lastpost}
          lastposter={thread.lastposter}
          tags={thread.tags}
          upvotes={thread.upvotes}
          downvotes={thread.downvotes}
        />
      );
    });

    return (
      <div className="ThreadsView p-mt-2 p-grid nested-grid p-jc-center p-nogutter">
        <Toast ref={this.toast} />

        <div className="p-col-10 p-pt-4 p-grid p-jc-between">
          <div className="p-grid p-my-auto">
            <span className="p-float-label">
              <Chips
                id="tags"
                value={this.state.values1}
                onChange={e => this.setState({ values1: e.value })}
                className="p-mx-2"
                separator=","
                tooltip="This feature is not supported in prototype!"
                tooltipOptions={{
                  className: "pink-tooltip",
                  position: "bottom",
                }}
              />
              <label htmlFor="tags">Filter tags</label>
            </span>

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
            label="Create a thread"
            className="p-my-auto p-button-raised p-button-text"
            onClick={() =>
              history.push({
                pathname: "/threadCreation",
                state: { location: history.location.pathname },
              })
            }
          />
        </div>

        <div className="p-col-10 p-mt-3">
          {threads.slice(
            this.state.basicFirst,
            this.state.basicFirst + this.state.basicRows
          )}
        </div>
        <Paginator
          className="p-col-10 p-py-3"
          first={this.state.basicFirst}
          rows={this.state.basicRows}
          totalRecords={threads.length}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={e => this.onBasicPageChange(e)}
        ></Paginator>
      </div>
    );
  }
}
