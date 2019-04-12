/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, FlatList, TextInput} from 'react-native';


//type Props = {};
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { x:""}
  }

  onUpdate = (name) => {
   this.props.onUpdate(name);
  }
  render() {
    const {textStyle} = styles
    return (
      <View style={styles.container}>
      <TextInput style={textStyle} onChangeText={this.onUpdate}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white'
   },
   item: {
     padding: 10,
     fontSize: 28,
     height: 44,
   },
   textStyle: {
     fontSize: 30,
     padding: 15,
     backgroundColor: 'grey'
   }
});
