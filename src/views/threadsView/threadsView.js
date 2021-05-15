import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";

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
    };
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
    ];

    const data = this.props.threads ? this.props.threads : loremipsumthreads;
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
        />
      );
    });

    return (
      <div className="ThreadsView p-grid nested-grid p-jc-center p-nogutter">
        <div className="p-col-10 p-pt-4 p-grid p-jc-between">
          <div className="p-grid p-my-3">
            <span className="p-float-label">
              <Chips
                id="tags"
                value={this.state.values1}
                onChange={e => this.setState({ values1: e.value })}
                className="p-mx-2"
                separator=","
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
              />

              <label htmlFor="sortby">Sort by</label>
            </span>
          </div>
          <Button
            icon="pi pi-plus"
            label="Create a thread"
            className="p-my-auto p-button-raised p-button-text"
            onClick={() => history.push("/threadCreation")}
          />
        </div>

        <div className="p-col-10">
          {threads.slice(
            this.state.basicFirst,
            this.state.basicFirst + this.state.basicRows
          )}
        </div>
        <Paginator
          className="p-col-10 p-mb-0 p-mt-auto"
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
