import "./App.css";
import Nav from "./components/nav/nav";
import { Route, Switch } from "react-router-dom";
import UserSettings from "./views/userSettings/userSettings";
import UserProfile from "./views/userProfile/userProfile";
import UserProfileOther from "./views/userProfileOther/userProfileOther";
import Pms from "./views/pms/pms";
import SingleThreadView from "./views/singleThreadView/singleThreadView";
import ThreadCreation from "./views/threadCreation/threadCreation";
import ListPmsView from "./views/listPmsView/listPmsView";

import Trending from "./views/subforums/trending";
import Jobs from "./views/subforums/jobs";
import Software from "./views/subforums/software";
import Hardware from "./views/subforums/hardware";
import Market from "./views/subforums/market";
import ThreadsView from "./views/threadsView/threadsView";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App p-grid p-jc-center p-nogutter">
        <div className="p-col-12 navbar">
          <Nav />
        </div>
        <div className="p-col-12 p-xl-8 content p-shadow-5">
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/userProfile" component={UserProfile} exact />
            <Route
              path="/userProfileOther"
              component={UserProfileOther}
              exact
            />
            <Route path="/userSettings" component={UserSettings} exact />
            <Route path="/userMessages" component={ListPmsView} exact />
            <Route path="/Unga_Punga" component={Pms} exact />

            <Route path="/threadsView" component={ThreadsView} exact />
            <Route
              path="/singleThreadView"
              component={SingleThreadView}
              exact
            />
            <Route path="/threadCreation" component={ThreadCreation} exact />
            <Route path="/trending" component={Trending} exact />
            <Route path="/jobs" component={Jobs} exact />
            <Route path="/software" component={Software} exact />
            <Route path="/hardware" component={Hardware} exact />
            <Route path="/market" component={Market} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}
