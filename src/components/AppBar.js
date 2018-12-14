import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Avatar from "@material-ui/core/Avatar";
// import FacebookLogin from 'react-facebook-login'

import { connect } from "react-redux";
import { loginAction } from "../actions/authActions";


const consoleLog = (_) => {
  console.log(_)
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  loginCallback = (res) => {
    if (res && res.id) {
      this.props.loginAction(res)
    }
    else {
      console.error(res)
    }
  }
  render() {
    const { classes, onClickMenu, auth } = this.props;

    const loginPart = auth.user ?
      <Avatar alt={auth.user.name} src={auth.user.picture.data.url} className={classes.avatar} /> :
      <FacebookLogin
        appId="743868692652250"
        fields="name,email,picture"
        autoLoad
        callback={this.loginCallback}
        render={renderProps => (
          <Button onClick={renderProps.onClick}>Login</Button>
        )}
      />;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => onClickMenu()} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Play Ground
          </Typography>
            {loginPart}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickMenu: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { loginAction })(withStyles(styles)(ButtonAppBar));