import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";

import axios from 'axios'
import { Content, Card, CardItem, Text, Spinner, Body, Container } from 'native-base'
import CustomHeader from './../../CustomHeader'

export default class ThumbnailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, data: [] };
    }

    async loadData() {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
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

        const itemList = this.state.data.map(item => {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {param: item.id})}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>{item.title}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            )
        })


        if (this.state.isLoading) {
            return (
                <Content>
                    <Spinner color='blue' />
                </Content>
            )
        }

        return (
            <Container>
                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />

                <Content>

                    {itemList}
                </Content>
            </Container>



        );
    }
}
