/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, NetInfo, Text, TouchableHighlight, Image, Alert, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import List from './Pages/List';
import Player from './Player';
import HomeCard from './components/HomeCard';
import Random from "./Pages/Random";
import DailyMotionPlayer from "./DailyMotionPlayer";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hello",
      connected : true
   }
  }
  componentDidMount()
  {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      (hasInternetConnection) => this.checkConnection());
  }

  
  checkConnection()
  {
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log("connected : ",isConnected);
      if(isConnected)
      {
        this.setState({connected : true});
        console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        // Alert.alert("Error", isConnected ? 'online' : 'offline', [{ "text": 'retry',onPress : ()=> this.checkConnection()}]);
      }
      else{
        this.props.navigation.navigate('Home')
        this.setState({ connected: false });
      }
    });
  }


  render() {
    if(this.state.connected)
    {
      return (
        <View style={styles.container} id={1}>
          <HomeCard
            key={1}
            name="Videos"
            destination="List"
            src={require('./resources/images/random.jpg')} />
          <HomeCard
            key={2}
            name="Tik Tok"
            destination="Random"
            src={require('./resources/images/videos.jpg')} />
          <HomeCard
            key={3}
            name="Musically"
            destination="Musically"
            src={require('./resources/images/more.jpg')} />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Image
            style={styles.noWifi}
            source={require('./resources/images/no-wifi.png')}/>
          <Text style={styles.errorHead}>Oops!</Text>
          <Text style={styles.errordesc}>Please check you internet connection.</Text>
          <TouchableHighlight
            onPress={() => { this.checkConnection()}}>
            <Text style={styles.retry}>Retry</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
}


export default createStackNavigator({
  Home: {screen: App, navigationOptions: {
    header: null,
  }},
  Player: {
    screen: Player, navigationOptions: {
      title: 'Player',
    }
  },
  DailyMotionPlayer : {
    screen: DailyMotionPlayer, navigationOptions : {
      title : 'Player',
    }
  },
  Random: {
    screen: Random, navigationOptions: {
      title: 'Videos',
    }
  },
  List: {
    screen: List, navigationOptions: {
      title: 'Videos',
    }
  },
},
{
  initialRouteName: 'DailyMotionPlayer',
  navigationOptions : {
    headerStyle: {
      backgroundColor: '#0e1113',
    },
    headerTintColor: '#C4FFC4',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e1113',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  errorHead : {
    color : '#fff',
    fontSize : 25
  },
  errordesc : {
    color: '#b6b6b6',
    fontSize : 12 
  },
  noWifi : {
    width : 64,
    height : 64,
  },
  retry : {
    marginTop : 25,
    backgroundColor : '#fff',
    color : "#000",
    paddingHorizontal : 15,
    paddingVertical : 9,
    borderRadius : 3,
    fontSize : 14
  }
});
