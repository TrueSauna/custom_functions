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
  View,
  TouchableHighlight,
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

  _tpstyles:{},
  _tpPreviousTop:0,
  _tpPreviousLeft:0,

  getInitialState(){
      return {
          testState: "initial state"
      }
  },


  componentWillMount: function(){
    this._tpStyles = {
      style: {
        top:10,
        left:150
      }
    };
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


  onPressFunction: function(){

      this._tpStyles.style.width = 120;
      this._tpStyles.style.height = 120;
      this._tpStyles.style.left = 140;

      this._touchPanel.setNativeProps(this._tpStyles);
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


        <TouchableHighlight underlayColor='blue' style={styles.touchPanel} onPress={this.onPressFunction} ref={component => this._touchPanel = component}{...this.props}>
          <Text></Text>
        </TouchableHighlight>


      </View>
    );
  }
});


var Box = React.createClass({
  testFunction2: function(){
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



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  touchPanel: {
    position: 'absolute',
    width:100,
    height:100,
    backgroundColor:'green',
    top:10,
    left:150,
  },
  box:{
    position:'absolute',
    backgroundColor:'red',
    width:100,
    height:100,
    left:10,
    top:10,
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
