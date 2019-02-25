import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', paddingTop: 20}}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
      </View>
    );
  }
}
