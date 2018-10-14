/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class HomeCard extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => 
                {
                    if (this.props.destination == 'Musically')
                    {
                        this.props.navigation.navigate('Random', { word: this.props.destination })
                    }else{
                    this.props.navigation.navigate({ routeName: this.props.destination })}    
                    }
                }
                >
                <View style={styles.block}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <Image
                        style={styles.image}
                        source={this.props.src}
                    />
                    <Image style={styles.arrow} source={require('../resources/images/right-arrow.png')} />
                </View>
            </TouchableNativeFeedback>
        );
    }

}


export default withNavigation(HomeCard);


const styles = StyleSheet.create({
    block : {
        height : 160,
        backgroundColor : '#cccc',
        width : '90%',
        overflow : 'hidden',
        marginTop : 15,
    },
    image : {
        position : 'absolute',
        width : '120%',
        height : '170%'
    },
    text : {
        position : 'absolute',
        zIndex : 99,
        color : '#fff',

    },
    arrow : {
        position: 'absolute',
        zIndex: 99,
        right : 0,
        top : '28%',
    }
});
