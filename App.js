/**
 * Created by Administrator on 2016/8/19 0019.
 */


import React, { Component } from 'react';

import {
    AppRegistry,
    Navigator,
} from 'react-native';

var MainPage = require('./app/main/mainpage');

class Root extends Component {

    renderScene(route, navigator) {

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
