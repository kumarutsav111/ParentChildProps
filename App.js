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
import Parenttochild from './Parenttochild';
import Childtoparent from './Childtoparent';

//type Props = {};
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { x:"abc"}
    this.state = { y:"asdfdf"}
  }

  onUpdate = (value) => {
   this.setState ({x: value})
  }
  render() {
    const {textStyle} = styles
    return (
      <View style={styles.container}>
      {/* <TextInput style={textStyle} onChangeText={(text) => this.setState({x: text})}/> */}
      <Childtoparent onUpdate={this.onUpdate}/>
      <Parenttochild y={this.state.y}/>
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
