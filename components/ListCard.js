/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TouchableWithoutFeedback, ImageBackground, Dimensions} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

const ViewportHeight = Dimensions.get("window").height;

class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = { randomViews: 0,
            randomLikes: 0 };
    }
    componentDidMount()
    {
        const minViews = 1000;
        const maxViews = 100000;
        const minLikes = 100;
        const maxLikes = 788;
        const randViews = minViews + Math.random() * (maxViews - minViews);
        const randLikes = minLikes + Math.random() * (maxLikes - minLikes);
        this.setState({
            randomViews: this.state.randomViews + parseInt(randViews),
            randomLikes: this.state.randomLikes + parseInt(randLikes)});
    }
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('Player', { link: this.props.link})}>
                <View style={styles.block}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <ImageBackground
                        style={styles.image}
                        source={{uri : this.props.src}}
                    >
                        <Image style={styles.loading} source={require('../resources/images/play-button.png')} />
                    </ImageBackground>
                    <View style={styles.views}>
                        <Text>{this.state.randomViews} views</Text>
                        <Text>{this.state.randomLikes} likes</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}


export default withNavigation(ListCard);


const styles = StyleSheet.create({
    block: {
        height: 300,
        backgroundColor: '#000',
        width: '100%',
        overflow: 'hidden',
        marginTop: ViewportHeight - 400,
    },
    image: {
        position: 'absolute',
        height : 250,
        width : '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom : 50
    },
    play : {
    },
    views : {
        backgroundColor: '#e1e1e1',
        height : 50,
        width : '100%',
        position : 'absolute',
        bottom : 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection : 'row',
        paddingHorizontal : 20
    }
});
