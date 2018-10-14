import React, { Component } from 'react';
import { WebView, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { View } from 'native-base';


export default class DailyMotionPlayer extends Component {
    // componentDidMount(){

    //     Alert.alert('http://www.dailymotion.com/embed/video/'+Id);
    //     this.Id = this.props.navigation.getParam('id');
    // }
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    showSpinner() {
        console.log('Show Spinner');
        this.setState({ visible: true });
    }

    hideSpinner() {
        console.log('Hide Spinner');
        this.setState({ visible: false });
    }
    render() {
        const { navigation } = this.props;
        // const id = navigation.getParam('id');
        const id = 'x6uwsl7';
        return (
            <View style={{ flex : 1,backgroundColor: '#0e1113'}}>
                <View style={{ height: '50%', }}>
                    <WebView
                        source={{ uri: 'http://www.dailymotion.com/embed/video/' + id }}
                        style={{ flex: 1, backgroundColor: '#0e1113' }}
                        automaticallyAdjustContentInsets={false}
                        onLoadStart={() => (this.showSpinner())}
                        onLoad={() => (this.hideSpinner())}
                    />

                    {this.state.visible && (
                        <ActivityIndicator
                            style={{ position: "absolute", top: '45%', left: '45%' }}

                            size="large"
                        />
                    )}
                </View>
            </View>
        );
        // Later on in your styles..

    }
}
