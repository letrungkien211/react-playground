import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { withStyles } from '@material-ui/core/styles';


const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = (evt) => {
    console.log(evt);
}

const styles = {
    root: {
        width: '100%',
        textAlign: 'center'
    }
}

class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <p>Login</p>
            </div>
        )
    }
}

export default withStyles(styles)(Login)