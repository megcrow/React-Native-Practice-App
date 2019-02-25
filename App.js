import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import RandomDogBowtie from './components/RandomDogBowtie';
import HelloWorld from './components/HelloWorld';
import TigerTranslator from './components/TigerTranslator';
import BasicButtons from './components/BasicButtons';
import { FlatListBasics, SectionListBasics } from './components/Lists'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:'#edf3ff'}}>
        <View style={{alignItems: 'center', flex:1, justifyContent:'flex-start'}}>
          <RandomDogBowtie />
          <HelloWorld />
          <TigerTranslator />
          <BasicButtons />
          <FlatListBasics />
          <SectionListBasics />
        </View>
      </ScrollView>
    );
  }
}

