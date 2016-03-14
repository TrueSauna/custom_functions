'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';



global.myfunction = function myfunction() { return "TestA myfunction" };




var TestA = React.createClass({
    
  render() {

    return (
        <View>
            <Text>TestA Render {this.props.testProp}</Text>
        </View>
    );
  }
});




var styles = StyleSheet.create({

});




module.exports = TestA;