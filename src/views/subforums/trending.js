import React, { Component } from "react";
import ThreadsView from "../threadsView/threadsView";
import data from "../../data/trendingthreads.json";
export default class Trending extends Component {
  render() {
    return <ThreadsView threads={data}></ThreadsView>;
  }
}
