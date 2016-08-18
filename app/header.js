import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

class Header extends Component {
    /*
     * the head for update pic
     * you can set width and height
     *
     * */
    render() {
        return (
            <Image
                style={styles.div1}
                source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_01.jpg'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    div1: {
        width: ScreenWidth,
        height: 260,
        resizeMode: 'cover',
    },
});

module.exports = Header;
