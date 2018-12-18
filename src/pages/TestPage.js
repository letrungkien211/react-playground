import React, { Component } from 'react'
import { Layout } from "../layout/";
import {  withStyles} from "@material-ui/core/styles";
import Post from "../components/Post";

const styles = {
  root:{
    textAlign:'center'
  }
}
class TestPage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Layout>
        <div className={classes.root}>
          <Post />
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(TestPage)

