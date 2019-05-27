import React, { Component } from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert,WebView,TouchableOpacity,style,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from '../component/card';
import styled from 'styled-components'
import firebase from 'firebase';
export default class HomeScreen extends Component {
  static navigationOptions =
   {
    title: 'Main menu'
  
  };
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  
  componentDidMount() {
    firebase.database().ref('SONGLIST').on('value', (snapshot) => {
      var defaultdata = {
        songtitle : '',
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
      <ImageBackground style={{width:'100%',height:'100%'}}source = {require('../assets/bb.jpg')}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '50%', height: 50, backgroundColor: '#DC2B50',borderWidth:0.5,borderColor:'white' }} >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',marginTop:10,color:'white'}}>Home</Text>
          </TouchableOpacity>
        </View>
  

        
        <View style={{width: '50%', height: 50, backgroundColor: '#DC2B50',borderWidth:0.5,borderColor:'white' }}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Playlist')}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',marginTop:10,color:'white'}}>Play Lists</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <ScrollView style={{marginTop:50}}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('POPLIST')}>
      <Container>
      <Item >
        <Image style={{width:330,height:150,alignItems:'center',borderRadius:5}} source={{uri:'https://pixel.nymag.com/imgs/daily/vulture/2017/12/best-of-2017/11-yic-pop-essay.w1200.h630.jpg'}}/>
      <Title >Pop Music</Title>
      </Item>
      </Container>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('CLASSICLIST')}>
      <Container>
      <Item >
        <Image style={{width:330,height:150,alignItems:'center',borderRadius:5}} source={{uri:'https://i.ytimg.com/vi/mOaxrp14Tus/maxresdefault.jpg'}}/>
      <Title >Classical Music</Title>
      </Item>
      </Container>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('TRAPLIST')}>
      <Container>
      <Item >
        <Image style={{width:330,height:150,alignItems:'center',borderRadius:5}} source={{uri:'https://i.ytimg.com/vi/VHSmwpFf2Ms/maxresdefault.jpg'}}/>
      <Title >Trap Hip-Hop Music</Title>
      </Item>
      </Container>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('EDMLIST')}>
      <Container>
      <Item >
        <Image style={{width:330,height:150,alignItems:'center',borderRadius:5}} source={{uri:'https://i.ytimg.com/vi/YGZ6KZ9TR-M/maxresdefault.jpg'}}/>
      <Title >EDM Music</Title>
      </Item>
      </Container>
      </TouchableOpacity>
         
        
     
     
     
     {/* <View style={{backgroundColor: "#A1045A"}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:10,marginBottom:10}}>
        <Icon name="microphone" size={25} color='black'  />
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Addsong')}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>
          Add your song 
        </Text>
        </TouchableOpacity>
        </View>
        </View>
    

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:10,marginBottom:10}}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Songdetail',item)}>
        <Card songtitle={item.songtitle}  
        
        image={{ uri: item.image }}
        
            /></TouchableOpacity>
          }
        />
        </View>
       {/*<WebView 
       source={{uri: 'https://www.joox.com/th'}}
       style={{marginTop: 0,height:600}}
       />*/}
       
   

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