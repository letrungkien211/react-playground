import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  {Header, Footer, Main}  from "./layout";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
