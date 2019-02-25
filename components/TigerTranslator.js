import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class TigerTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
    }

    render() {
        return (
            <View style={{padding:20}}>
                <TextInput
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    style={{fontSize:30}}
                />
                <Text style={{padding:10, fontSize:42}}>
                    {this.state.text.split(' ').map((word) => word && '🐯').join(' ')}
                </Text>
            </View>
        )
    }
}
