import React, { Component } from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert,WebView,TouchableOpacity,style,ImageBackground,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import Card4 from '../component/card4';
import styled from 'styled-components'
import firebase from 'firebase';
export default class DAILYHELLO extends Component {
  static navigationOptions =
   {
    title: 'คำสวัสดีทักทายประจำวัน'
  
  };
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('DAILYHELLO').on('value', (snapshot) => {
      var defaultdata = {
        image:'',
      }
      let data = snapshot.val()
      if(data == null){
        this.setState({data : defaultdata})
      }else{
        let items = Object.values(data)
        this.setState({ data: items })
       
      }
    }
  
    
    )
}
  render() {
    return (
      <ImageBackground style={{width:'100%',height:'100%'}}source = {require('../assets/test.jpg')}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'red',textAlign:'center'}}>กดค้างเพื่อแชร์รูป</Text>
      <ScrollView>
        
     
    

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:10,marginBottom:10}}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          
        <Card4 
        image={item.image }
        />
          }
        />
       </View>
   
    
    </ScrollView>
    </ImageBackground>
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