import "./threadsView.css";
import Threadheader from "../../components/threadheader/threadheader";

function ThreadsView() {
  const items = [];

  for (let index = 0; index < 10; index++) {
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

  return (
    <div className="ThreadsView">
      <div className="p-mt-2 p-grid p-jc-center">{items}</div>
    </div>
  );
}

export default ThreadsView;
