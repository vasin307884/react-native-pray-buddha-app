import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Item} from 'native-base'
import {Audio} from'expo';
import firebase from 'firebase'
export default class Card5 extends React.Component {
  constructor(props){
    super(props);
    this.playbackObject = new Audio.Sound();
  this.state = {title : this.props.songtitle,image:this.props.image,video:this.props.video}

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
    <View style = {{flex:1, flexDirection:'row',borderWidth: 0.5,borderColor: 'black',marginBottom:2,marginRight:5,borderRadius:10}}>   
    <View style={{marginLeft:5,flex:1,borderWidth: 1,borderColor: 'black'}}>
    <Image style={{height:100,width:120}} source = {{uri:this.props.image}}/>
    </View>
    <View style = {{flex:2}}>
    <Text style = {{fontSize : 25 , fontWeight : 'bold',color:'black',marginLeft:10}}>{this.props.dayname}</Text>
    <View style={{flex:1,flexDirection:'column',marginTop:5}}>
    <Text style = {{fontSize : 18 ,color:'black',marginLeft:10}}>{this.props.date}</Text>
    <Text style = {{fontSize : 18 ,color:'black',marginLeft:10,marginTop:10}}>อ่านเพิ่มเติม...</Text>
    </View>
    </View> 
 
 </View>
    );
  }
}


