import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,ActivityIndicator,ImageBackground
} from 'react-native';
import firebase from 'firebase';
export default class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = {email : '',password : '',error : '',loading:false}
}
  onButtonPress() {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((error) => {
        
            let errorCode = error.code
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak password!')
            } else {
              this.onLoginFailure.bind(this)(errorMessage)
            }
          });
      
  }
  onLoginSuccess() {
    this.props.navigation.navigate('Home',{emailx : this.state.email})
    this.setState({
      email: '', password: '', error: '', loading: false
      
    })
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false })
  }
  renderButton() {
    if (this.state.loading) {
      return(
          <View >
             <ActivityIndicator size={"small"} />
          </View>
      );
    }
    return (
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.loginText}>เข้าสู่ระบบ</Text>
        </TouchableHighlight>
    );
  }

  render() {
    return (
        <ImageBackground style={{width:'100%',height:'100%'}}source = {require('../assets/new.jpg')}>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={this.state.email}
              onChangeText={(email) => this.setState({email : email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.password}
              onChangeText={(password) => this.setState({password:password})}/>
        </View>

        {this.renderButton()}
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.loginText}>สมัครสมาชิก</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontWeight:'bold',color:'white'}}>Guest</Text>
        </TouchableHighlight>
        {/*}
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('MainUser')}>
            <Text style={{fontWeight:'bold'}}>go to main</Text>
    </TouchableHighlight>*/}
        <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>
          {this.state.error}
        </Text>
        </View>
        </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
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
    backgroundColor: "#DC2B50",
  },
  loginText: {
    color: 'white',
    fontSize:15,
    fontWeight:'bold'
  }
});