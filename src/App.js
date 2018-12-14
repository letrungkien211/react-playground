import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import { Header, Footer, Main } from "./layout";
import configureStore from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    );
  }
}

export default App;
