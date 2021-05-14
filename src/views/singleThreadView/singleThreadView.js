import "./singleThreadView.css";
import React, { Component } from "react";
import loremipsumposts from "../../data/loremipsumposts.json";
import ThreadPost from "../../components/threadpost/threadPost";

export default class SingleThreadView extends Component {
  render() {
    const data = this.props.posts ? this.props.threads : loremipsumposts;
    const posts = data.map(post => {
      return (
        <div className="p-col-10 p-mt-5">
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

    return <div className="SingleThreadView p-grid p-jc-center">{posts}</div>;
  }
}
