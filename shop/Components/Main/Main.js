

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

import checkLogin from '../Api/checkLogin.js';
import getToken from '../Api/getToken.js';
import global from '../global';



export default class Main extends Component<{}> {
    componentDidMount() {
        getToken()
            .then(token => checkLogin(token))
            .then(res => global.onSignIn(res.user))
            .catch(err => console.log('LOI CHECK LOGIN', err));
    }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    render() {
        return (
            <Drawer
                ref={(ref) =>{ this.drawer = ref;}}
                content={<Menu  navigation={this.props.navigation} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}


