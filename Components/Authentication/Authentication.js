

import React, { Component } from 'react';
import {View, Text,TouchableOpacity,Image,StyleSheet, TextInput} from 'react-native';

import icBack from '../media/appIcon/back_white.png';
import icLogo from '../media/appIcon/ic_logo.png';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';


export default class Authentication extends Component<{}> {
    constructor(props){
        super (props);
        this.state= {isSignIn: true};
    }

    goBackToMain() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { row1,iconStyle, titleStyle,container,
            controlStyle,  signInStyle, signUpStyle, activeStyle,inactiveStyle,
        } =styles;

        const {isSignIn} =this.state;
        const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)}/> : <SignUp /> ;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={() =>{this.props.navigation.goBack()}} >
                        <Image source={icBack} style={iconStyle}/>
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle}/>
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity  style={signInStyle} onPress={() => this.setState({ isSignIn : true })}>
                        <Text style={isSignIn? activeStyle:inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle}  onPress={() => this.setState({ isSignIn : false  })}>
                        <Text style={!isSignIn? activeStyle:inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#D15FEE',
        padding: 20,
        justifyContent:'space-between'
    },

    row1: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    iconStyle: {
        width: 30 ,
        height :30
    },

    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 30
    },

    controlStyle:{
        flexDirection:'row',
        alignSelf: 'stretch'
    },

    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },

    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#D15FEE'
    },

    inputStyle:{
        height: 50,
        backgroundColor:'#fff',
        marginBottom:10,
        borderRadius:20,
        paddingLeft:30

    },

    bigButton:{
        height:50,
        borderRadius:20,
        borderWidth:1,
        borderColor: "#fff",
        justifyContent:'center',
        alignItems:'center'

    }

});

