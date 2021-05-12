import React, { Component } from "react";
import Threadgroup from "../../components/threadgroup/threadgroup";
import ThreadGroupElement from "../../components/threadgroupelement/threadgroupelement";

export default class Software extends Component {
  render() {
    const frontendThreads = [
      <ThreadGroupElement title="Guides" desc="Tutorials from professionals" />,
      <ThreadGroupElement title="Cool projects" desc="Fun fun fun" />,
      <ThreadGroupElement title="Cool projects" desc="Fun fun fun" />,
      <ThreadGroupElement title="Cool projects" desc="Fun fun fun" />,
    ];

    const backendThreads = [
      <ThreadGroupElement title="Guides" desc="Tutorials from professionals" />,
      <ThreadGroupElement title="Cool projects" desc="Fun fun fun" />,
    ];

    const groups = [
      <Threadgroup title="Frontend development" threads={frontendThreads} />,
      <Threadgroup title="Backend development" threads={backendThreads} />,
    ];

    return (
      <div className="p-grid p-jc-center">
        <div className="p-col-10 p-pt-6 p-pb-6">{groups}</div>
      </div>
    );
  }
}
