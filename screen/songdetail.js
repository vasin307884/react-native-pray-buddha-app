import React from 'react';
import { Image, StyleSheet, Text, View,WebView} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
export default class Songdetail extends React.Component {
    static navigationOptions =
   {
    title: 'Song Detail'
  
  };
  render() {
    const {songtitle,songowner,lyric,video} = this.props.navigation.state.params;

    return (
        <ScrollView>
    <View style={{backgroundColor:'black'}}>
   <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'white'}}>{songtitle} by ({songowner})</Text>
   <WebView 
       source={{uri:video}}
       style={{marginTop: 0,height:200}}
       />
   <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'white'}}>Lyrics</Text>
   <Text style={{textAlign:'center',fontSize:20,color:'white'}}>{lyric}</Text>
   <View>
    
     
    </View> 
  </View>
 </ScrollView>
    );
  }
}


