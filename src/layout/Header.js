import React from "react";

import { AppBar, Drawer } from "../components";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: false
        }
    }

    toggleDrawer = (open) => {
        console.log(`Toggle Drawer: ${this.state.drawerOpen} --> ${open}`)
        this.setState({
            drawerOpen: open
        })
    }

    render() {
        return <>
            <AppBar onClickMenu={() => { this.toggleDrawer(!this.state.drawerOpen) }} />
            <Drawer toggleDrawer={this.toggleDrawer} open={this.state.drawerOpen} />
        </>
    }
}

export default Header;