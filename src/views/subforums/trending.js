import React, { Component } from "react";
import ThreadsView from "../threadsView/threadsView";
import data from "../../data/trendingthreads.json";
export default class Trending extends Component {
  render() {
    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-mt-3 p-mb-3">
          <ThreadsView threads={data}></ThreadsView>
        </div>
      </div>
    );
  }
}
