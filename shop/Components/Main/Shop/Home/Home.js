import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import HomeView from './HomeView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';


export const HomeStack = StackNavigator({

    ManHinh_HomeView: {
        screen : HomeView,
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
    ManHinh_ListProduct:{
        screen : ListProduct,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
})

export default class Home extends Component<{}> {
    render() {
        const {types} = this.props;
        return (
            <HomeStack types={types}/>
        );
    }
}






