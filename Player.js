/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { withNavigation } from 'react-navigation';

const ViewportHeight = Dimensions.get("window").height;

export default class Player extends Component { 
    constructor(props) {
        super();
        this.state = {
            visible: true
        };
    }


    render() {
        const { navigation } = this.props;
        const link = navigation.getParam('link');
        return (
            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    <VideoPlayer
                        ref={(ref) => {
                            this.player = ref
                        }}
                        disableBack={true}
                        source={{ uri: link == null ? 'http://reylioinfotech.com/reyliocoffee/images/FunnyVideo/3.mp4' : link }}
                        style={styles.backgroundVideo} />
                </View>
            </View>
        );
    }
}


// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: ViewportHeight / 2
    },
    container: {
        flex: 1,
        backgroundColor: '#0e1113',
    },
    videoContainer : {
        backgroundColor : '#000',
        height: ViewportHeight / 2,
        width : '100%',
        display : "flex",
        justifyContent : 'center',
        alignItems : 'center'
    },
    loading : {
        
        height : 50,
        width : 50,

    }
});
