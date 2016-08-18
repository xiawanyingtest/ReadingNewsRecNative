/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
/* head  end 免费送*/
var Header = require('./app/header');

var Ticket = require('./app/ticket');
var ZhuanPan = require('./app/zhuanpan');
var Reward = require('./app/reward');
var Info = require('./app/info');
var Footer = require('./app/footer');

let ScreenWidth = Dimensions.get("window").width;

class ReadingReactNative extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header/>
                <Ticket/>
                <ZhuanPan/>
                <Reward />
                <Info />
                <Footer/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


AppRegistry.registerComponent('ReadingReactNative', () => ReadingReactNative);
