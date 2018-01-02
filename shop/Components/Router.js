
import React from 'react';
import {StackNavigator} from 'react-navigation';
import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';



export const ScreenStack = StackNavigator({
    ManHinh_Main: {
        screen : Main,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_Authentication : {
        screen: Authentication,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ChangeInfo:{
        screen : ChangeInfo,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_OrderHistory:{
        screen: OrderHistory,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
})



