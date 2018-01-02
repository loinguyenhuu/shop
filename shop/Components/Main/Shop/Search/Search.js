import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import SearchView from './SearchView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';


export const SearchStack = StackNavigator({

    ManHinh_SearchView: {
        screen : SearchView,
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

export default class Search extends Component<{}> {
    render() {
        return (
            <SearchStack/>
        );
    }
}






