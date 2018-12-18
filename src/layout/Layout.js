
import React, { Component } from 'react'

import Header from "./Header";
import { AppBar } from "../components/index";

export default class Layout extends Component {
  render() {
    return (
      <>
        {this.props.children}
        <AppBar />
      </>
    )
  }
}
