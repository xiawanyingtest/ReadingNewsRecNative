/**
 * Created by Administrator on 2016/8/19 0019.
 */


import React, { Component } from 'react';

import {
    AppRegistry,
    Navigator,
    BackAndroid,
} from 'react-native';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
    if(_navigator == null){
        return false;
    }
    if(_navigator.getCurrentRoutes().length === 1){
        return false;
    }
    _navigator.pop();
    return true;
});

var MainPage = require('./app/main/mainpage');

class Root extends Component {

    renderScene(route, navigator) {

        _navigator = navigator;

        let Component = route.component;
        return <Component {...route.params} navigator={navigator}/>

    }
    render() {
        return (
            <Navigator

                initialRoute={{name: 'MainPage', component: MainPage}}
                configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;

         }}
                renderScene={this.renderScene}

            />
        );
    };
}

export default Root;
