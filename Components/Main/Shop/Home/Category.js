import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

import litterIcon from '../../../media/temp/little.jpg';
import maxiIcon from '../../../media/temp/maxi.jpg';
import partyIcon from '../../../media/temp/party.jpg';



const { height, width } = Dimensions.get('window');

export default class Category extends Component {
        render() {
        const { wrapper, textStyle,  imageStyle, cateTitle} = styles;
        const {types} =this.props;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center' , paddingTop:5}}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{flex:4}}>
                <Swiper  width={imageWidth} height={imageHeight}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('ManHinh_ListProduct')}}>
                            <ImageBackground source={maxiIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ManHinh_ListProduct')}}>
                        <ImageBackground source={partyIcon} style={imageStyle}>
                            <Text style={cateTitle}>Party Dress</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ManHinh_ListProduct')}}>
                        <ImageBackground source={litterIcon} style={imageStyle}>
                            <Text style={cateTitle}>Mini Dress</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Swiper>
                </View>
            </View>
        );
    }
}

// tính chiều dài và rộng banner
const imageWidth = width - 40;
const imageHeight = imageWidth /2;


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

    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent:'center',
        alignItems:'center'
    },

    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },

    cateTitle: {
        fontSize:20,
        color:'#9A9A9A'
    }
});
