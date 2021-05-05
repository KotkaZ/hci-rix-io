import "./App.css";
import Nav from "./components/nav/nav";
import Threadheader from "./components/threadheader/threadheader";

function App() {
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
    <div className="App">
      <Nav />
      {items}
    </div>
  );
}

export default App;
