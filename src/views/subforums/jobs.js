import React, { Component } from "react";
import Threadgroup from "../../components/threadgroup/threadgroup";
import ThreadGroupElement from "../../components/threadgroupelement/threadgroupelement";

export default class Jobs extends Component {
  render() {
    const softwareThreads = [
      <ThreadGroupElement
        title="Fullstack developer"
        desc="Fullstack developers"
      />,
      <ThreadGroupElement
        title="Frontend developer"
        desc="Only frontend jobposts"
      />,
      <ThreadGroupElement title="Backend developer" desc="All backend jobs" />,
      <ThreadGroupElement
        title="Cloud engineer"
        desc="Only cloud engineering jobs"
      />,
      <ThreadGroupElement
        title="Software architect"
        desc="Architects, look jobs here!"
      />,
      <ThreadGroupElement title="Misc" desc="All the others" />,
    ];

    const hardwareThreads = [
      <ThreadGroupElement
        title="Server maintainer"
        desc="Lorem ipsum dolor sit amet"
      />,
      <ThreadGroupElement
        title="Lorem ipsum dolor sit amet"
        desc="Lorem ipsum dolor sit amet"
      />,
    ];

    const groups = [
      <Threadgroup title="Software developers ♥" threads={softwareThreads} />,
      <Threadgroup title="The hardware guys" threads={hardwareThreads} />,
    ];

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-pt-6 p-pb-6">{groups}</div>
      </div>
    );
  }
}
