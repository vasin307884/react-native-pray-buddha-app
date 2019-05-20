import React from 'react';
import { ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer,createSwitchNavigator, DrawerNavigator } from "react-navigation";
import firebase from 'firebase';
import HomeScreen from './screen/home'
import LoginScreen from './screen/Login';
import Songdetail from './screen/songdetail';
import Addsong from './screen/addsong';
import Register from './screen/register';
const Loginnavigator = createStackNavigator({
  Login : {screen : LoginScreen},
})
const LandingNavigator= createSwitchNavigator({
  LoginForm :{screen : LoginScreen},
  initialRouteName: 'LoginForm'
})
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Songdetail : Songdetail,
    Addsong:Addsong,
    Register:Register
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#3CAEA3",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
    },
    },

  }
  );

  const AppContainer = createAppContainer(AppNavigator,LandingNavigator);
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
  }
  render() {
    return(
    <AppContainer/>
      );
  }
}
