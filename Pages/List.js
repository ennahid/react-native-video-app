/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import ListCard from '../components/ListCard';
import  { ENTRIES1 } from '../MyData/entries';


const sliderWidth = Dimensions.get("window").width;

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: shuffleArray(ENTRIES1)
        }
    }
    _renderItem({ item, index }) {
        return (
            <ListCard
                id={index}
                src={item.image}
                link={item.video}
                destination="Player" />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    style={styles.cards}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth - 80}
                    windowSize={1}
                />
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
