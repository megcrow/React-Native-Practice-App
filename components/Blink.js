import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }

    render() {
        if(!this.state.isShowingText) {
            return null;
        }
        return (
            <Text style={this.props.style}>{this.props.text}</Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', paddingTop:20}}>
                <Blink text='I love to blink' style={styles.red}/>
                <Blink text='Yes blinking is so great' style={styles.bigBlue}/>
                <Blink text='Why did they ever take this out of HTML' style={[styles.bigBlue, styles.red]}/>
                <Blink text='Look at me look at me look at me' style={[styles.red, styles.bigBlue]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'American Typewriter',
        fontSize: 50
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily : 'Bodoni 72 Oldstyle'
    },
    red: {
        color: 'red'
    }
})
