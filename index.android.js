/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import Root from './root';
//
//import { AppRegistry } from 'react-native';
'use strict';

import React from 'react-native';

import Root from './App';

var { AppRegistry } =React;
//var ReadingReactNative = React.createClass({
//    render: function() {
//        return (
//            <Root />
//        );
//    }
//});
AppRegistry.registerComponent('ReadingReactNative', () => Root);
