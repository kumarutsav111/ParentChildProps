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
export default class Parenttochild extends React.Component{

  render() {
    const {textStyle} = styles
    return (
      <View style={styles.container}>
      <Text style={textStyle}> {this.props.y} </Text>
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
