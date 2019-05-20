import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,ActivityIndicator
} from 'react-native';
import firebase from 'firebase';

export default class Register extends Component {

  constructor(props){
    super(props)
    this.state = {email : '',password : '',error : '',loading:false}
}

static navigationOptions = {
    title: 'Register',
  }
  onButtonPress() {
    const {email , password} = this.state
        this.setState({loading:true})
       firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>this.props.navigation.goBack())
       .catch((error)=>{
        let errorCode = error.code
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          this.onLoginFailure.bind(this)('Weak password!')
        } else {
          this.onLoginFailure.bind(this)(errorMessage)
        }
        
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
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
    );
  }

  render() {
    return (
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

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Confirm-Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.password}
              onChangeText={(password) => this.setState({password:password})}/>
        </View>

        {this.renderButton()}
        {/*}
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('MainUser')}>
            <Text style={{fontWeight:'bold'}}>go to main</Text>
    </TouchableHighlight>*/}
        <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>
          {this.state.error}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
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
      backgroundColor: "#3CAEA3",
    },
    loginText: {
      color: 'white',
      fontSize:15,
      fontWeight:'bold'
    }
  });