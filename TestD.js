'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';




var TestD = React.createClass({

  
    componentDidMount(){
        this.props.changeStateFunction("state after change");
    },

    render() {
        return (
            <View>
                <Text>TestD Render</Text>
            </View>
        );
    }
});




var styles = StyleSheet.create({

});




module.exports = TestD