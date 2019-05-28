import React from 'react';
import { Image, StyleSheet, Text, View,WebView,ImageBackground} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
export default class Daydetail extends React.Component {
    static navigationOptions =
   {
    title: 'ประวัติความเป็นมา'
  
  };
  render() {
    const {dayname,image,detail} = this.props.navigation.state.params;

    return (
        <ImageBackground style={{width:'100%',height:'100%'}}source = {require('../assets/test.jpg')}>
        <ScrollView>
        <View>
        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>{dayname}</Text>
          <Image source={{uri:image}}  style={{height:300}} />
          
          <Text style={{fontSize:20,textAlign:'center'}}>{detail}</Text>
        </View>

 </ScrollView>
 </ImageBackground>
    );
  }
}


