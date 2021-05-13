import React, { Component } from "react";
import Trheadheader from "../../components/threadheader/threadheader";
import ThreadsView from "../threadsView/threadsView";

export default class Trending extends Component {
  render() {
    const trendingThreads = [
      <Trheadheader
        title="SpringBoot Getting Started"
        author="KotkaZ"
        replies="123"
        views="123"
        lastpost="8/8/8"
        lastposter="Baranka"
      />,
      <Trheadheader
        title="JS Memes only"
        author="Matthew"
        replies="123123"
        views="123"
        lastpost="8/8/8"
        lastposter="Peter"
      />,
      <Trheadheader
        title="Lorem"
        author="Lorem ipsum"
        replies="123"
        views="512"
        lastpost="8/8/8"
        lastposter="Lorem"
      />,
      <Trheadheader
        title="Lorem"
        author="Lorem ipsum"
        replies="123"
        views="123"
        lastpost="8/8/8"
        lastposter="Lorem"
      />,
      <Trheadheader
        title="Lorem"
        author="Lorem ipsum"
        replies="123"
        views="412"
        lastpost="8/8/8"
        lastposter="Lorem"
      />,
      <Trheadheader
        title="Lorem"
        author="Lorem ipsum"
        replies="123"
        views="234"
        lastpost="8/8/8"
        lastposter="Lorem"
      />,
    ];

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-mt-3 p-mb-3">
          <ThreadsView threads={trendingThreads}></ThreadsView>
        </div>
      </div>
    );
  }
}
