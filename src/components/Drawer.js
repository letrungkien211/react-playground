import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router";
import { compose } from "redux";

import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const links = [
  {
    displayName: 'Home',
    route: '/',
    icon: <HomeIcon/>
  },
  {
    displayName: 'Test',
    route: '/test',
    icon: <CancelIcon/>
  }
]

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, toggleDrawer, open, history } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {links.map((item, index) => (
            <ListItem onClick={()=> history.push(item.route)} button key={item.displayName}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.displayName} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={open}  onClose={()=> toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=>toggleDrawer(false)}
            onKeyDown={()=>toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default  compose(withRouter,  withStyles(styles))(TemporaryDrawer);