import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width:200, height:110, marginTop: 20}}/>
        );
    }
}

