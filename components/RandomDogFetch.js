import React from 'react';
import { ActivityIndicator, Image, View, Text } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, picture: null };
    }

    async getRandomDog() {
        try{
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const responseJSON = await response.json();
            const message = responseJSON.message;
            this.setState({
                isLoading: false,
                picture: {
                    uri: message
                }
            });
            let pic = {
                uri: message
            };
        } catch(error) {
            console.error(error)
        }
    }

    componentDidMount() {
        this.getRandomDog();
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return(
            <View style={{flex:1, paddingTop:20}}>
                <Text>Hello picture!</Text>
                {this.state.picture ? (
                    <Image source={this.state.picture} style={{ width:200, height:110, marginTop: 20}} />
                ) : (
                    'No picture'
                )}
            </View>
        )
    }
}

