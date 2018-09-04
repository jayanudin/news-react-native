import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    ActivityIndicator
} from "react-native";

import { Icon, Button, Container, Header, Content, Left, Right, Card, Body, CardItem, Thumbnail, Text, Spinner } from 'native-base'

export default class ThumbnailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: [] };
    }

    async loadData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const json = await response.json();

        this.setState({ 
            isLoading: false, 
            data: json 
        });

    }

    async componentDidMount() {
        this.loadData()
    }


    render() {

        if (this.state.isLoading) {
            return (
                <Content>
                    <Spinner color='blue' />
                </Content>
            )
        }

        return (
            <View>
                {this.state.data.map(el => (
                    <Card style={{ borderColor: '#777775', marginBottom: 10, paddingBottom: 30 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('./../../../assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
                                <Body>
                                    <Text>{el.title}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://dummyimage.com/600x400/000/fff' }}
                                style={{ height: 200, width: null, flex: 1 }}
                            />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>{el.body}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                ))}
            </View>

        );
    }

}