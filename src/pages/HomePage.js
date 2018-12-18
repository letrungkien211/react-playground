
import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import { Layout } from "../layout/";

const styles = {
  root: {

  },
  textField:{
  }
}

class HomePage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Layout>
                  <TextField
          id="outlined-search"
          label="Search"
          fullWidth
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Layout>
    )
  }
}

export default withStyles(styles)(HomePage)
