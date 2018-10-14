/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

const ViewportHeight = Dimensions.get("window").height;

class RandomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomViews: 0,
            randomLikes: 0
        };
    }
    render() {
        return (
            <View style={styles.btnblock}>
                <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate('DailyMotionPlayer', { id: this.props.id })}
                    >
                    <View style={styles.block}>
                        <Image
                            style={styles.image}
                            source={{uri : this.props.image}}
                        >
                        </Image>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

}


export default withNavigation(RandomCard);


const styles = StyleSheet.create({
    btnblock : {
        width: '100%',
        alignItems: 'center',
    },
    block: {
        width : '95%',
        marginVertical : 5,
        backgroundColor : '#000',
        height : 250,
    },
    image : {
        height : '100%',
        width : '100%',
    }
});
