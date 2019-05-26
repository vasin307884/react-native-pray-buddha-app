import React from 'react';
import { Image, StyleSheet, Text, View,ImageBackground} from 'react-native';
// import HeaderBar from './components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'native-base'
import styled from 'styled-components'
export default class Card extends React.Component {
  render() {

    return (
      
      <Container>
      <Item >
        <Image style={{width:330,height:150,alignItems:'center',borderRadius:5}} source={this.props.image}/>
      <Title >{this.props.songtitle}</Title>
      </Item>
      
</Container>
    );
  }
}

const Container=styled.View`
    flex:1;
    padding:10px;
    justify-content:center;
    align-items:center
`
const Title=styled.Text`
margin:10px;
font-size:20px;
text-align:center;
 color:white;
 fontWeight:bold;
`
const Item=styled.View`
flex:1;
border:2px solid #ccc;
margin:2px 0;
border-radius:10px;
width:100%;
padding:10px;
backgroundColor:black;
`