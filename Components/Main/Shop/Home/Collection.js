import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle,  imageStyle} = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center' }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <View style={{flex:4}}>
                    <Image source={bannerImage} style={imageStyle} />
            </View>
            </View>
        );
    }
}
// tính chiều dài và rộng banner
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;


const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },

    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
});
