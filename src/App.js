import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import sampul from "../src/page/sampul"
import home from "../src/page/home"
import agenda from "../src/page/agenda"
import galeri from "../src/page/galeri"
import live from "../src/page/live"
import mempelai from "../src/page/mempelai"
import penutup from "../src/page/penutup"
import Oops from "../src/page/notfound"

class App extends Component {
  state = {}
  render() {
    return (<div>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/sampul" component={sampul} />
        <Route path="/agenda" component={agenda} />
        <Route path="/galeri" component={galeri} />
        <Route path="/live" component={live} />
        <Route path="/mempelai" component={mempelai} />
        <Route path="/penutup" component={penutup} />
        <Route component={Oops} />
      </Switch>
    </div>);
  }
}

export default App;