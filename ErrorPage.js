/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions, ActivityIndicator } from 'react-native';


// 'https://api.dailymotion.com/videos?fields=description,id,thumbnail_360_url,title&page=' + this.page + '&limit=50'

const sliderWidth = Dimensions.get("window").width;


export default class ErrorPage extends Component {


    render() {
        return (
            <View>
                <Text>ERROR</Text>
                <Text>ERROR</Text>
                <Text>ERROR</Text>
                <Text>ERROR</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e1113',
    },


});
