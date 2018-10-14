/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList, NetInfo, Alert, Dimensions, ActivityIndicator } from 'react-native';
import RandomCard from '../components/RandomCard';
import { withNavigation } from 'react-navigation';

// 'https://api.dailymotion.com/videos?fields=description,id,thumbnail_360_url,title&page=' + this.page + '&limit=50'

const sliderWidth = Dimensions.get("window").width;


export default class Random extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], page : 1, animating : false };
    }
    componentDidMount() {

        this.getMoviesFromApiAsync(this.state.page);

    }
    getMoviesFromApiAsync(page){
        this.setState({animating : true});
        this.setState({ page: this.state.page + 1 })
        const { navigation } = this.props;
        let word = null
        word = navigation.getParam('word');
        const searchTerm = word ? word : 'Tik+Tok';
        return fetch(`https://api.dailymotion.com/videos?search=${searchTerm}&fields=title,description,id,thumbnail_360_url&page=${page}&limit=10`)
        .then((response) => response.json())
        .then((responseJson) => {
            page == 1 ? this.setState({ videos: responseJson.list }) : this.setState({ videos: this.state.videos.concat(responseJson.list)}) 
            console.table(this.state.videos);
            this.setState({ animating: false });
        })
        .catch((error) => {
            // this.props.navigation.navigate('ErrorPage');
            // Alert.alert("Error", "No internet connection.", [{ "text": 'retry', onPress: () => { this.getMoviesFromApiAsync() }}]);
            console.error(error);
            this.setState({ animating: false });
        });
}

    my_end(distance)
    {
        this.getMoviesFromApiAsync(this.state.page);
    }

        
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.state.videos}
                    onEndReached={({ distanceFromEnd }) => {
                        this.my_end(distanceFromEnd)
                    }}
                    onEndReachedThreshold={0.5}
                    keyExtractor={item => item.index}
                    directionalLockEnabled={true}
                    renderItem={({ item }) => 
                    // <Text key={item.id}>hello</Text>
                    <RandomCard
                        key={item.index}
                        image={item.thumbnail_360_url}
                        id={item.id}
                    />
                    }
                />
                <View
                    style={{
                        display: this.state.animating == true ? 'flex' : 'none',
                        alignItems: 'center',
                    }}>
                    <ActivityIndicator
                        size="large"
                        color="#00ff00"
                    />
                </View>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e1113',
    },
    list : {
        flex : 1
    },

});
