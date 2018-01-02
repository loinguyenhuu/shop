

import React, { Component } from 'react';
import {View, Text,TouchableOpacity,StyleSheet, TextInput} from 'react-native';

import signIn from '../Api/signIn.js';
import global from '../global.js';
import saveToken from '../Api/saveToken.js';

export default class SignIn extends Component<{}> {
    constructor(props){
        super(props);
        this.state ={
            name :'',
            password:'',
        };
    }
    onSignIn(){
        const{ email , password }= this.state;
        signIn( email , password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.goBackToMain();
                saveToken(res.token);
            })
            .catch(err => console.log(err));
    }
    render() {
        const {inputStyle,bigButton} = styles;
        return (
            <View>
                <TextInput style={inputStyle}
                           placeholder="Enter Your Email"
                           value={this.state.email}
                           onChangeText={text => this.setState({email: text})}
                />
                <TextInput style={inputStyle}
                           placeholder="Enter Your Password"
                           value={this.state.password}
                           secureTextEntry
                           onChangeText={text => this.setState({password: text})}
                />
                <TouchableOpacity  style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={{color:'#fff'}}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({


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

