import "./App.css";
import Nav from "./components/nav/nav";
import Threadheader from "./components/threadheader/threadheader";
import {Route, Switch} from "react-router-dom";
import MainPage from './views/mainPage/mainPage'
import UserSettings from './views/userSettings/userSettings'
function App() {

    return (
        <div className="App">
            <Switch>
                <Route path='/' component={MainPage} exact/>
                <Route path='/userSettings' component={UserSettings} exact/>
                <Route component={Error} />
            </Switch>
        </div>
    );
}

export default App;
