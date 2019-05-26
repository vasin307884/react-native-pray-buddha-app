import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Item} from 'native-base'
import {Audio} from'expo';
export default class Card2 extends React.Component {
  constructor(props){
    super(props);
    this.playbackObject = new Audio.Sound();
  }
  btnStopPlayerClicked = async()=>{
    await this.playbackObject.pauseAsync();
  }
  btnPlayerClicked = async()=>{
    await this.playbackObject.loadAsync({uri:this.props.video});
    await this.playbackObject.playAsync();
  }
  btnReplayClicked = async()=>{
    await this.playbackObject.replayAsync();
  }
  render() {

    return (
    <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'black',marginBottom:2}}>   
    <View style={{marginLeft:5,flex:1,borderWidth: 1,borderColor: 'gray'}}>
    <Image style={{height:100,width:125}} source = {this.props.image}/>
    </View>
    <View style = {{flex:2}}>
    <Text style = {{fontSize : 18 , fontWeight : 'bold',color:'white',marginLeft:10}}>{this.props.songtitle} by ({this.props.owner}) </Text>
    <View style={{flex:1,flexDirection:'row'}}>
    <Icon name="caretright" size={30} color='white' onPress={this.btnPlayerClicked} style={{marginLeft:10}}/>
    <Icon name="pause" size={30} color='white' onPress={this.btnStopPlayerClicked} style={{marginLeft:30}}/>
    <Icon2 name="replay" size={30} color='white' onPress={this.btnReplayClicked} style={{marginLeft:30}}/>
    </View>
    </View> 
 
 </View>
    );
  }
}


