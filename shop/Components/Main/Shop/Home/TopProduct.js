import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

import sp1 from '../../../media/temp/sp1.jpeg';
import sp2 from '../../../media/temp/sp2.jpeg';
import sp3 from '../../../media/temp/sp3.jpeg';
import sp4 from '../../../media/temp/sp4.jpeg';



export default class TopProduct extends Component {
    render() {
        const {  container, titleContainer, title,
            body, productContainer, productImage,
            produceName, producePrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={() => {this.props.navigation.navigate('ManHinh_ProductDetail')}}>
                        <Image source={sp1} style={productImage}/>
                        <Text style={produceName}>Product name</Text>
                        <Text  style={producePrice}>Product price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => {this.props.navigation.navigate('ManHinh_ProductDetail')}}>
                        <Image source={sp2} style={productImage}/>
                        <Text style={produceName}>Product name</Text>
                        <Text style={producePrice}>Product price</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => {this.props.navigation.navigate('ManHinh_ProductDetail')}}>
                        <Image source={sp3} style={productImage}/>
                        <Text style={produceName}>Product name</Text>
                        <Text style={producePrice}>Product price</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={() => {this.props.navigation.navigate('ManHinh_ProductDetail')}}>
                        <Image source={sp4} style={productImage}/>
                        <Text style={produceName}>Product name</Text>
                        <Text style={producePrice}>Product price</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth=(width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft:10

    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500',
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});