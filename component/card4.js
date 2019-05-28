import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Item} from 'native-base'
import {Audio} from'expo';
import firebase from 'firebase'
import styled from 'styled-components'
export default class Card4 extends React.Component {
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
        <View>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PRAYLIST')}>
        <Container>
        <Item1 >
          <Image style={{width:330,height:200,alignItems:'center',borderRadius:5}} source={{uri:this.props.image}}/>
        </Item1>
        </Container>
        </TouchableOpacity>
       </View>

    );
  }
}
const Container=styled.View`
    flex:1;
    padding:10px;
    justify-content:center;
    align-items:center
`
const Item1=styled.View`
flex:1;
border:2px solid #ccc;
margin:2px 0;
border-radius:10px;
width:100%;
padding:10px;
backgroundColor:black;
`

