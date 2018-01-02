import React, { Component } from 'react';
import {View,Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header.js';



import homeIconS from '../../media/appIcon/home.png';
import homeIcon from  '../../media/appIcon/home0.png';
import cartIconS from '../../media/appIcon/cart.png';
import cartIcon from '../../media/appIcon/cart0.png';
import searchIconS from '../../media/appIcon/search.png';
import searchIcon from '../../media/appIcon/search0.png';
import contactIconS from '../../media/appIcon/contact.png';
import contactIcon from '../../media/appIcon/contact0.png';


class Shop extends Component<{}> {
    constructor(props){
        super(props);
        this.state={ selectedTab :'home',
            types: [],
            topProducts: [],
            cartArray: [] };
    }

    componentDidMount (){
        fetch('http://10.90.114.24:1080/api/')
            .then(res =>res.json())
            .then(resJSON => {
                const {type} = resJSON;
                this.setState({types :type});
            });

    }

    openMenu(){
        const {open} = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        const { types, selectedTab, topProducts, cartArray } = this.state;
        return (
            <View style={{flex: 1}}>
               <Header onOpen ={this.openMenu.bind(this)}/>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Home types={types} topProducts={topProducts}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089'}}
                    >
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 20, height: 20
    }
});


export default Shop;