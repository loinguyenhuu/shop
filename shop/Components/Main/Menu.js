import React, { Component } from 'react';
import {View, Text,TouchableOpacity, StyleSheet, Image} from 'react-native';

import profileIcon from'../media/temp/profile.png';
import global from '../global.js';
import saveToken from'../Api/saveToken.js';

 class Menu extends Component<{}> {
     constructor(props){
         super (props);
         this.state= {user : null};
         global.onSignIn = this.onSignIn.bind(this);
     }

     onSignIn(user){
         this.setState({user });
         saveToken('');
     }

     onSignOut() {
         this.setState({ user: null });
     }

     render() {
        const {
            container, profile, btnStyle,btnText,
            btnSignInStyle, btnTextSignIn,loginContainer
        } = styles;
        const {user} = this.state;
        const logoutJSX=(
            <View style={{flex:1}}>
                <TouchableOpacity style={btnStyle} onPress={() => {this.props.navigation.navigate('ManHinh_Authentication')}}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX=(
            <View style={loginContainer}>
                <Text style={{color:'#fff',fontSize:20}}> {user ? user.name : ''}</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={() => {this.props.navigation.navigate('ManHinh_OrderHistory')}}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={() => {this.props.navigation.navigate('ManHinh_ChangeInfo')}}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View/>
            </View>
        );
        const mainJSX = this.state.user ? loginJSX : logoutJSX ; // nếu mainJSX true thì hiển thị loginJSX còn false thì logoutJSX
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile}/>
                {mainJSX}
                </View>


//
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D15FEE',
        borderRightWidth:3,
        borderColor: '#fff',
        alignItems:'center'
    },

    profile:{
        width:120,
        height:120,
        borderRadius:60,
        marginVertical:30

    },

    btnStyle:{
        height:50,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius:5,
        paddingHorizontal:70
    },

    btnText:{
        color:'#D15FEE',
        fontSize:20
    },

    btnSignInStyle:{
        height:50,
        justifyContent:'center',
        backgroundColor: '#fff',
        borderRadius:5,
        width:200,
        marginBottom:10,
        paddingLeft:10
    },
    btnTextSignIn:{
        color:'#D15FEE',
        fontSize:20

    },

    loginContainer:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    }
});

export default Menu;