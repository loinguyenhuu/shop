import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import CartView from './CartView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';


export const CartStack = StackNavigator({

    ManHinh_CartView: {
        screen : CartView,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail : {
        screen: ProductDetail,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

})

export default class Cart extends Component<{}> {
    render() {
        return (
            <CartStack/>
        );
    }
}






