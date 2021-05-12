import { Paginator } from "primereact/paginator";
import React, { useState } from "react";

import "./threadsView.css";
import Threadheader from "../../components/threadheader/threadheader";

function ThreadsView() {
  const items = [];
  for (let index = 0; index < 25; index++) {
    items.push(
      <Threadheader
        title="Learning React the Hard Way"
        author="KotkaZ"
        replies="12"
        views="21998"
        lastpost="April 4, 2021, 15:35:10"
        lastposter="Baranka"
      />
    );
  }

  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);

  const onBasicPageChange = event => {
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  return (
    <div className="ThreadsView p-grid nested-grid p-jc-center p-nogutter">
      <div className="p-col-10 p-pt-4">
        {items.slice(basicFirst, basicFirst + basicRows)}
      </div>
      <Paginator
        className="p-col-10 p-mb-0 p-mt-auto"
        first={basicFirst}
        rows={basicRows}
        totalRecords={items.length}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onBasicPageChange}
      ></Paginator>
    </div>
  );
}

export default ThreadsView;
