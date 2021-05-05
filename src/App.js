import "./App.css";
import Nav from "./components/nav/Nav";
import Threadheader from "./components/threadheader/Threadheader";

function App() {
  return (
    <div className="App">
      <Nav />
      <Threadheader
        title="Learning React the Hard Way"
        author="KotkaZ"
        replies="12"
        views="21998"
        lastpost="April 4, 2021, 15:35:10"
        lastposter="Baranka"
      />
    </div>
  );
}

export default App;
