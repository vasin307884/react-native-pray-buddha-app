import React, { Component } from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert,WebView,TouchableOpacity,style} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from '../component/card';
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
        songowner : '',
        lyric : '',
        video:''
        
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
      <ScrollView>
      <View style={{backgroundColor: "#3CAEA3"}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginTop:10,marginBottom:10}}>
        <Icon name="microphone" size={25} color='black'  />
        <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Addsong')}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>
          Add your song 
        </Text>
        </TouchableOpacity>
        </View>
        </View>


        <View style={{}}>
        <FlatList 
        data={this.state.data}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Songdetail',item)}>
        <Card songtitle={item.songtitle}  
        songowner={item.songowner}
        image={{ uri: item.image }}
        lyric={item.lyric}
            /></TouchableOpacity>
          }
        />
        </View>
       {/*<WebView 
       source={{uri: 'https://www.joox.com/th'}}
       style={{marginTop: 0,height:600}}
       />*/}
       
   
    
    </ScrollView>
    );
  }
}
