/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var TestA = require('./TestA');
var TestB = require('./TestB');
var TestC = require('./TestC');
var TestD = require('./TestD');
var Global = require('./Globals');



var initialState = "";

var TestText = "TestText";
//global.mySet = function mySet(text) { TestText = text };
global.myGet = function myGet() { return TestText };





var Test = {
    
  testFunction3: function(){
    return 'testidata3';
  },

};



var custom_functions = React.createClass({
    
    
  getInitialState(){
      return {
          testState: "initial state"
          
      }
      
  },
    
  changeState(newState){
      initialState = this.state.testState;
      this.setState({
          testState: newState   //Testing
          
      })

  },
    

  testFunction1: function(){
    return 'testidata1';
  },

  render: function(){
    
    
    //this.changeState("test");  
    //mySet("testing");
      
    return (
      <View style={styles.container}>
        <Box></Box>
        <Text>{myfunction()}</Text>
        <Text>{Global.COLOR.ORANGE}</Text>  
        <Text>{myGet()}</Text>
        <Text>{TestB()}</Text>
        <Text>{TestC.testFunctionC1()}</Text>
        <Text>{TestC.testFunctionC2()}</Text>
        <Text>{TestC.testFunctionC3()}</Text>
        <TestA testProp="testing"></TestA>
        <TestA/>
        <Text>{initialState}</Text>
        <TestD changeStateFunction={this.changeState}></TestD>
        <Text>{this.state.testState}</Text>
      </View>
    );
  }
});



var Box = React.createClass({

  //funktiokutsu tässä eikä alempana <Text> -sisällä, jotta voidaan käyttää muutakin kuin jsx:ää
  testFunction2: function(){
      
    //ei toimi
    //mySet("testing");

      
      
    //tämä ei toimi:
    //return this.testFunction1();
      return Test.testFunction3();
  },

  render: function(){
    return(
      <View style={styles.box}>
        <Text style={{alignItems:'center', top:35, left:35, flex:1}}>{this.testFunction2()}</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box:{
    position:'absolute',
    backgroundColor:'red',
    width:100,
    height:100,
    left:100,
    top:100,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('custom_functions', () => custom_functions);
