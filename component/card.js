import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
export default class Card extends React.Component {
  render() {

    return (
    <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'black',marginBottom:0,backgroundColor:'black'}}>   
    <View style={{flex:1,borderWidth: 1,borderColor: 'gray'}}>
    <Image style={{height:100,width:125}} source = {this.props.image}/>
    </View>
    <View style = {{flex:2}}>
    <Text style = {{fontSize : 15 , fontWeight : 'bold',marginTop:40,marginLeft:5,color:'white'}}>{this.props.songtitle} by ({this.props.songowner})</Text>

    
    </View> 
 
 </View>
    );
  }
}


