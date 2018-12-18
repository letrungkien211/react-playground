import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"
import AppBar from "@material-ui/core/AppBar";
import { withRouter } from "react-router";
import { compose } from "redux";

const styles = {
  root:{
    position: 'fixed',
    bottom: 0,
    width: '100%',
    alignItems:'center'
  }
};

class ButtonAppBar extends React.Component {
  constructor(props){
    super(props);
  }

  list =[
    {
      label: 'Home',
      path: '/',
      icon: <HomeIcon />
    },
    {
      label: 'Favorites',
      path: '/favorites',
      icon: <FavoriteIcon />
    },
    {
      label: 'Profile',
      path: '/profile',
      icon: <PersonIcon />
    },
    {
      label: 'Test',
      path: '/test',
      icon: <ExploreIcon />
    },
  ]

  handleChange = (_, value)=>{
    this.props.history.push(this.list[value].path)
  }

  render() {
    const { classes, location} = this.props;
    const value = this.list.findIndex(x=> x.path === location.pathname.toLowerCase())    
    console.log(location)

    return (
        <AppBar className={classes.root} position="static">
          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
            {this.list.map(x=> <Tab key={x.label} icon={x.icon} />)}
          </Tabs>
        </AppBar>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withRouter, withStyles(styles))(ButtonAppBar);