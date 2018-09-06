import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    ActivityIndicator
} from "react-native";
import axios from 'axios'

import { Icon, Button, Container, Header, Content, Left, Right, Card, Body, CardItem, Thumbnail, Text, Spinner } from 'native-base'

export default class ThumbnailDetail extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: [] };
    }

    async loadData() {
        const navParams = this.props.navigation.state.params;

        try {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + navParams.param)
            const json = response.data

            this.setState({

                isLoading: false,
                data: json
            });

        } catch (error) {
            console.log(error.message)
        }
    }

    componentDidMount() {
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
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>{this.state.data.body}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}