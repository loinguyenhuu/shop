

import React, { Component } from 'react';
import {View, Text,TouchableOpacity,StyleSheet, TextInput, Alert} from 'react-native';
import register from '../Api/register.js';


export default class SignUp extends Component<{}> {

    constructor(props){
        super(props);
        this.state ={
            name :'',
            password:'',
            email:'',
            rePassword: '',
        };
    }

    registerUser(){
        const {name, email, password} = this.state;
        register(email, password, name)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                this.onFail();
            });
    }

    onSuccess(){
        Alert.alert(
            'Notice',
            'Sign Up Successfully',
            [
                {text: 'OK', onPress: () => console.log('Ask me later pressed')},
            ],
            { cancelable: false }
        )
    }

    onFail(){
        Alert.alert(
            'Notice',
            'Email has been used',
            [
                {text: 'OK', onPress: () => console.log('Ask me later pressed')},
            ],
            { cancelable: false }
        )
    }


    render() {
        const {inputStyle,bigButton} = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChangeText={text => this.setState({name: text})}
                />
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
                <TextInput style={inputStyle}
                           placeholder="Re-Enter Your Password"
                           value={this.state. rePassword}
                           secureTextEntry
                           onChangeText={text => this.setState({ rePassword: text})}
                />
                <TouchableOpacity  style={bigButton} onPress={this.registerUser.bind(this)}>
                    <Text style={{color:'#fff'}}>SIGN UP NOW</Text>
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

