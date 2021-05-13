import React, { Component } from "react";
import Threadgroup from "../../components/threadgroup/threadgroup";
import ThreadGroupElement from "../../components/threadgroupelement/threadgroupelement";

export default class Hardware extends Component {
  render() {
    const pcThreads = [
      <ThreadGroupElement title="CPUs" desc="Its all about the AMD! ♥" />,
      <ThreadGroupElement title="GPUs" desc="All info related to GPUs" />,
      <ThreadGroupElement title="Memory modules" desc="HDDs, SSDs, RAM etc." />,
      <ThreadGroupElement
        title="Cool projects"
        desc="Epic nitrogen PCs only! "
      />,
    ];

    const serverThreads = [
      <ThreadGroupElement title="Guides" desc="Tutorials from professionals" />,
      <ThreadGroupElement
        title="Help section"
        desc="Ask here, when you need help"
      />,
    ];

    const groups = [
      <Threadgroup title="PC World" threads={pcThreads} />,
      <Threadgroup title="Server" threads={serverThreads} />,
    ];

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-pt-6 p-pb-6">{groups}</div>
      </div>
    );
  }
}
