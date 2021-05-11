import "./App.css";
import Nav from "./components/nav/nav";
import { Route, Switch } from "react-router-dom";
import MainPage from "./views/mainPage/mainPage";
import UserSettings from "./views/userSettings/userSettings";
import Pms from "./views/pms/pms";
import SingleThreadView from "./views/singleThreadView/singleThreadView";
import ThreadCreation from "./views/threadCreation/threadCreation";
import ThreadsView from "./views/threadsView/threadsView";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/userSettings" component={UserSettings} exact />
          <Route path="/userMessages" component={Pms} exact />
          <Route path="/singleThreadView" component={SingleThreadView} exact />
          <Route path="/threadCreation" component={ThreadCreation} exact />
          <Route path="/threadsView" component={ThreadsView} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
