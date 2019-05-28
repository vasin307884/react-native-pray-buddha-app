import React from 'react';
import { ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,createStackNavigator, createAppContainer,createSwitchNavigator, DrawerNavigator } from "react-navigation";
import firebase from 'firebase';
import HomeScreen from './screen/home'
import LoginScreen from './screen/Login';
import Songdetail from './screen/songdetail';
import Addsong from './screen/addsong';
import Register from './screen/register';
import LandingPage from './screen/landingpage';
import PRAYLIST from './screen/prayerlist';
import DAILYHELLO from './screen/dailyhello';
import BUDDISHDAY from './screen/dayinbuddha';
import {createMaterialBottomTabNavigator} from'react-navigation-material-bottom-tabs'
import PlaylistScreen from './screen/playlist';
import Icon from 'react-native-vector-icons/Ionicons'
import { Tabs } from 'native-base';
import Card2 from './component/card2';
import Daydetail from './screen/daydetail';
const Loginnavigator = createStackNavigator({
  Login : {screen : LoginScreen},
})
const LandingNavigator= createSwitchNavigator({
  LoginForm :{screen : LoginScreen},
  initialRouteName: 'LoginForm'
})
const AppNavigator = createStackNavigator(
  {
    Home:HomeScreen,
    Playlist:PlaylistScreen,
    Card2: Card2,
    Landing:LandingPage,
    Login: LoginScreen,
    Songdetail : Songdetail,
    Addsong:Addsong,
    Register:Register,
    PRAYLIST : PRAYLIST,
    DAILYHELLO: DAILYHELLO,
    BUDDISHDAY : BUDDISHDAY,
    DAYDETAIL : Daydetail
    
  },
  {
    initialRouteName: "Landing",
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DC2B50",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    },

  }
  );
const Bottomtab = createBottomTabNavigator({
Home:{screen:HomeScreen,
  
navigationOptions:{
  tabBarLabel:'Home',
  tabBarIcon:({tintColor})=>(
<Icon name="ios-home" color ={tintColor} size={24}/>
  )
}},
Playlist:{screen:PlaylistScreen,
  navigationOptions:{
    tabBarLabel:'PlayLists',
    tabBarIcon:({tintColor})=>(
  <Icon name="ios-settings" color ={tintColor} size={24}/>
    )
  }
}
},{

 //order:['Home','Playlist'],
activeTintColor:'#DC2B50'
})
  const AppContainer = createAppContainer(AppNavigator,LandingNavigator,Loginnavigator,Bottomtab);
  console.disableYellowBox = true;
export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCQBRl1ROZCuxRZahTMlloiH7FMp9fYtUE",
      authDomain: "alone-project-42988.firebaseapp.com",
      databaseURL: "https://alone-project-42988.firebaseio.com",
      projectId: "alone-project-42988",
      storageBucket: "alone-project-42988.appspot.com",
      messagingSenderId: "398757346778"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })

  }
  render() {
    return(
    <AppContainer/>
      );
  }
}
