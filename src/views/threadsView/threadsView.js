import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import React, { Component } from "react";

import history from "../../history";
import "./threadsView.css";

export default class ThreadsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicFirst: 0,
      basicRows: 10,
    };
  }

  onBasicPageChange(event) {
    console.log(event);
    this.setState({ basicFirst: event.first });
    this.setState({ basicRows: event.rows });
  }

  render() {
    return (
      <div className="ThreadsView p-grid nested-grid p-jc-center p-nogutter">
        <div className="p-col-10 p-pt-4 p-grid p-jc-center">
          <Button
            icon="pi pi-plus"
            className="p-button-rounded p-button-outlined"
            onClick={() => history.push("/threadCreation")}
          />
        </div>

        <div className="p-col-10">
          {this.props.threads.slice(
            this.state.basicFirst,
            this.state.basicFirst + this.state.basicRows
          )}
        </div>
        <Paginator
          className="p-col-10 p-mb-0 p-mt-auto"
          first={this.state.basicFirst}
          rows={this.state.basicRows}
          totalRecords={this.props.threads.length}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={e => this.onBasicPageChange(e)}
        ></Paginator>
      </div>
    );
  }
}
