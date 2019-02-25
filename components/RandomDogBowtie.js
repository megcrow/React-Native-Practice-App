import Api from '@bowtie/api';
import React, { Component } from 'react';
import { ActivityIndicator, Image, View, Text } from 'react-native';


const api = new Api ({
    root: 'https://dog.ceo',
    stage: 'api',
    prefix: 'breeds',
    version:'image',
    // verbose: true,
    defaultOptions: {
        headers: () => ({})
    }
});

api.use(async (response) => {
    try {
        const data = await response.json()
        response['data'] = data
    } catch (e) {
        console.error(e)
    }

    return Promise.resolve(response)
});

api.on('success', (resp) => {
    console.log('GOOD RESP!')
})

api.on('200', (resp) => {
    console.log('200 -- GOOD RESP!')
})

api.on('error', (resp) => {
    console.log('BAD RESP!')
})

export default class RandomDogBowtie extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoading:true, picture:null}
    }

    async getRandomDog() {
        try{
            const response = await api.get('random');
            this.setState({
                isLoading: false,
                picture: {
                    uri: response.data.message
                }
            });
        } catch(error) {
            this.setState({
                isLoading: false
            })
            console.error(error)
        }
    }

    componentDidMount() {
        this.getRandomDog()
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
                {this.state.picture ? (
                    <Image source={this.state.picture} style={{ height: 200, width:200, marginTop: 20}} />
                ) : (
                    'No picture'
                )}
            </View>
        )
    }
}
