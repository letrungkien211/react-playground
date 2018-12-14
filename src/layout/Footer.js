import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
    }
};

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (<div className={classes.root}>
            <p>&copy; {new Date().getFullYear()} MIT</p>
        </div>
        )
    }
}

export default withStyles(styles)(Footer)