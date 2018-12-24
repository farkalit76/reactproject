import React, { Component } from "react";
import "./App.css";
import Archives from "./pages/archives";
import Layout from "./pages/layout";
import Features from "./pages/features";
import Settings from "./pages/settings";
import Error from "./pages/error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Layout} exact />
            <Route path="/archive" component={Archives} />
            <Route path="/feature" component={Features} />
            <Route path="/setting" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
