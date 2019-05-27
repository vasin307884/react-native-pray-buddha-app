import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,ActivityIndicator,ImageBackground
} from 'react-native';
navBarHidden:true
export default class LandingPage extends Component {
  render() {
    return (
        <ImageBackground style={{width:'100%',height:'100%'}}source = {require('../assets/nl.jpg')}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:325}}>
        <TouchableHighlight 
        style={{borderWidth:2,borderColor:'white',borderRadius:10,height:80,width:250,justifyContent:'center',alignItems:'center'}} 
        onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{fontWeight:'bold',color:'white',fontSize:30}}>Get Started !</Text>
        </TouchableHighlight>
        {/*}
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('MainUser')}>
            <Text style={{fontWeight:'bold'}}>go to main</Text>
    </TouchableHighlight>*/}
       
       </View>
        </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3CAEA3",
  },
  loginText: {
    color: 'white',
    fontSize:15,
    fontWeight:'bold'
  }
});