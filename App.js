import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import AppNavigator from './navigator/nav';
import * as firebase from 'firebase';


export default class App extends React.Component {
  constructor(){
    super();
    
  }
  

  render() {
    return (
<AppNavigator />
 
    );
  }
}


  
var config = {
    apiKey: "AIzaSyAA27Zp7ggqEoGrBQgY8-WdXnlLOZIowyo",
    authDomain: "reactmeetingapp.firebaseapp.com",
    databaseURL: "https://reactmeetingapp.firebaseio.com",
    projectId: "reactmeetingapp",
    storageBucket: "reactmeetingapp.appspot.com",
    messagingSenderId: "441578927485"
  };
  firebase.initializeApp(config);
