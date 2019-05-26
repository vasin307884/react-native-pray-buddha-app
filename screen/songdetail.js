import React from 'react';
import { Image, StyleSheet, Text, View,WebView} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
export default class Songdetail extends React.Component {
    static navigationOptions =
   {
    title: 'Lists of Music'
  
  };
  render() {
    const {songtitle,owner,lyric,video,list} = this.props.navigation.state.params;

    return (
        <ScrollView>

 </ScrollView>
    );
  }
}


