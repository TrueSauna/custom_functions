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

var custom_functions = React.createClass({

  testFunction1: function(){
    return 'testidata';
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Box></Box>
        <Text></Text>
      </View>
    );
  }
});

var Box = React.createClass({

  //funktiokutsu tässä eikä alempana <Text> -sisällä, jotta voidaan käyttää muutakin kuin jsx:ää
  testFunction2: function(){
    //tämä ei toimi:
    //return this.testFunction1();
      return custom_functions.testFunction1();
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
