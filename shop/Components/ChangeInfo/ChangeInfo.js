

import React, { Component } from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import backSpecial from '../media/appIcon/backs.png';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: 'Nguyen Huu Loi',
            txtAddress: 'Le Loi / Ben Thanh',
            txtPhone: '01638783293'
        };
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { name, address, phone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity  onPress={() =>{this.props.navigation.goBack()}}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={name}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={address}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={phone}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity style={signInContainer} onPress={()=>{this.props.navigation.goBack()}}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#D15FEE', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#D15FEE',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#D15FEE',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
