import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,TouchableHighlight,styles,
  View,TextInput
} from 'react-native';
import { Constants, ImagePicker, Permissions } from 'expo';
import uuid from 'uuid';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

console.disableYellowBox = true;
export default class Addsong extends React.Component {
    state = {
      image: null,
      uploading: false,
    };
    submitOrder = async () => {
        let myOrder = {
            songtitle:this.state.songtitle,
            songowner:this.state.songowner,
            lyric:this.state.lyric,
            Video:this.state.Video,
            image:this.state.image
        }
    
        alert(`You've added ${this.state.songtitle}! Wrote by : ${this.state.songowner}`);
        this.props.navigation.navigate('Home')
        fetch('https://alone-project-42988.firebaseio.com/SONGLIST.json', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(myOrder),
          });
          await this.loadData()
          
         
      }
    async componentDidMount() {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      await Permissions.askAsync(Permissions.CAMERA);
    }
  
    render() {
        let stylex = {
            borderWidth:1,borderColor:'gray',marginBottom:5
        }
      let { image } = this.state;
  
      return (
          <ScrollView>
            {this._maybeRenderUploadingOverlay()}
        <View style = {{padding:20,marginTop:50}}>
          
        <Text style = {{fontSize:20,fontWeight:'bold'}}>Adding Song </Text>
        
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Song-Title' onChangeText = {(songtitle) => this.setState({songtitle:songtitle})} ></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Song-Owner' onChangeText = {(songowner) => this.setState({songowner:songowner})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20,height:300}} placeholder = 'Lyrics' onChangeText = {(lyric) => this.setState({lyric:lyric})}></TextInput>
        </View>
        <View style={stylex}>
        <TextInput style = {{fontSize:15,padding:20}} placeholder = 'Video' onChangeText = {(video) => this.setState({video:video})}></TextInput>
        </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {image ? null : (
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
                textAlign: 'center',
                marginHorizontal: 15,
              }}>
              Your Image
            </Text>
          )}
          {this._maybeRenderImage()}
          
          <Button
            onPress={this._pickImage}
            title="Upload Image..."
          />
         
  
          <StatusBar barStyle="default" />
          <View style={{alignItems:'center'}}>
        <TouchableHighlight style={[styles2.buttonContainer, styles2.loginButton,]} 
        onPress={() => this.submitOrder()}>
          <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center'}}>Add</Text>
        </TouchableHighlight> 
        </View>
        </View>
        </ScrollView>
      );
    }
  
    _maybeRenderUploadingOverlay = () => {
      if (this.state.uploading) {
        return (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: 'rgba(0,0,0,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <ActivityIndicator color="#fff" animating size="large" />
          </View>
        );
      }
    };
  
    _maybeRenderImage = () => {
      let { image } = this.state;
      if (!image) {
        return;
      }
  
      return (
        <View
          style={{
            marginTop: 30,
            width: 250,
            borderRadius: 3,
            elevation: 2,
          }}>
          <View
            style={{
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
              shadowColor: 'rgba(0,0,0,1)',
              shadowOpacity: 0.2,
              shadowOffset: { width: 4, height: 4 },
              shadowRadius: 5,
              overflow: 'hidden',
            }}>
            <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
          </View>
  
         
            
          
        </View>
      );
    };
  
    _pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      this._handleImagePicked(pickerResult);
    };
  
    _handleImagePicked = async pickerResult => {
      try {
        this.setState({ uploading: true });
  
        if (!pickerResult.cancelled) {
          uploadUrl = await uploadImageAsync(pickerResult.uri);
          this.setState({ image: uploadUrl });
        }
      } catch (e) {
        console.log(e);
        alert('Upload failed, sorry :(');
      } finally {
        this.setState({ uploading: false });
      }
    };
  }
  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  
    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4());
    const snapshot = await ref.put(blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return await snapshot.ref.getDownloadURL();
  }
  const styles2 = StyleSheet.create({
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#3CAEA3",
      }
    },
    
    );