import React, { Component } from "react";
import "./App.css";
import Archives from "./components/pages/archives";
import Layout from "./components/pages/layout";
import Features from "./components/pages/features";
import Settings from "./components/pages/settings";
import Error from "./components/pages/error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/pages/navbar";
import Game from "./components/tictoe/game";
import Apps from "./components/apps/apps";
import Accounts from "./components/forms/account";
import Product from "./components/axois/product";
import Employee from "./components/axois/employee";
import Flights from "./components/forms/flights";
import Auction from "./components/auction/auctions";

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
          
          <Route path="/apps" component={Apps} />
          <Route path="/forms" component={Accounts} />
          <Route path="/forms2" component={Flights} />
          <Route path="/https" component={Product} />
          <Route path="/employee" component={Employee} />
          <Route path="/tictoe" component={Game} />
          <Route path="/auctions" component={Auction} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
