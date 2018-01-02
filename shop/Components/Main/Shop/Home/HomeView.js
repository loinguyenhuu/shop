import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';
import TopProduct from './TopProduct.js';

class HomeView extends Component<{}> {
    render() {
        const types = this.props.types;
        return (
            <ScrollView style={{flex: 1,backgroundColor:'#DBDBD8'}}>
                <Collection/>
                <Category navigation={this.props.navigation} types={types}/>
                <TopProduct navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

export default HomeView;