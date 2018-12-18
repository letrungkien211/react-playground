import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { TestPage, HomePage } from "./pages";
import configureStore from "./store";

import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch  } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Provider store={configureStore()}>     
          <Router>
            <Switch>            
              <Route exact path="/" component={HomePage} />
              <Route path="/test" component={TestPage} />
            </Switch>
          </Router>
        </Provider>
    );
  }
}

export default App;
