/**
 * Created by Administrator on 2016/8/19 0019.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image,
    TouchableNativeFeedback,
    //BackAndroid,
    WebView,
    ActivityIndicator,
} from 'react-native';


var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;
var NEWS_LINK = 'http://news.at.zhihu.com/api/4/news/';

//var _navigator;

class News extends Component {
    constructor(props) {
        super(props);
        //_navigator = this.props.navigator;
        this.state={
            loaded:false,
            detail:null,
        }
        _navigator = this.props.navigator;
    }

    componentDidMount() {

        fetch(NEWS_LINK+this.props.id).then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    detail: responseData,
                    loaded: true,
                });
            }).done();

/*        BackAndroid.addEventListener('hardwareBackPress', function() {
            if(_navigator == null){
                return false;
            }
            if(_navigator.getCurrentRoutes().length === 1){
                return false;
            }
            _navigator.pop();
            return true;
        });*/

    }

    render() {

        if(this.state.loaded){

            var res = this.state.detail;

            var h5 = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="'
                + res.css[0]
                + '" /></head><body>' + res.body
                + '</body></html>';

            return (

            <View>

                <View>
                    <WebView
                        style={styles.content}
                        source={{html:h5}}
                    />
                </View>

           </View>
       /*         <View style={styles.div3}>
        <Image
            style={styles.img}
            source={{uri:'http://pic0.qiyipic.com/common/20160601/20160601161042.jpg'}}
        />
        <Text style={styles.txt}>
            二等奖
            </Text>
            </View>*/
            );
        }else{
            return (
                <View>

                    <ActivityIndicator
                               style={[styles.centering, {height: 80}]}
                              size="large"
                              />
                </View>
            );
        }
        /* <ProgressBarAndroid style={styles.progress} styleAttr="Inverse" />*/

/*        var res = this.props.response;
        return (
            <View>
                <Text>{res.body}</Text>
            </View>
        );*/

    };
}

const styles = StyleSheet.create({
    content: {
        width:ScreenWidth,
        height:ScreenHeight,
    },
    progress: {
        width:100,
        height:ScreenHeight,
        alignSelf:'center',
    },
    news_title: {
        width:90,
        height:30,
        color:'white',
        textAlign:'center',
        backgroundColor:'black',
    }
});

module.exports = News;