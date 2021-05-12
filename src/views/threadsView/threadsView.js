import { Paginator } from "primereact/paginator";
import React, { useState } from "react";

import "./threadsView.css";

function ThreadsView() {
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);

  const onBasicPageChange = event => {
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  return (
    <div className="ThreadsView p-grid nested-grid p-jc-center p-nogutter">
      <div className="p-col-10 p-pt-4">
        {this.props.threads.slice(basicFirst, basicFirst + basicRows)}
      </div>
      <Paginator
        className="p-col-10 p-mb-0 p-mt-auto"
        first={basicFirst}
        rows={basicRows}
        totalRecords={this.props.threads.length}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onBasicPageChange}
      ></Paginator>
    </div>
  );
}

export default ThreadsView;
