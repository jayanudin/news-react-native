import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Right, Card, Body, CardItem, Thumbnail, Text } from 'native-base'

import CustomHeader from './../CustomHeader'
import ThumbnailCompoent from './Components/ThumbnailComponent';

export default class HomeScreen extends React.Component {



    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerRight: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../../assets/DrawerIcons/home.png')}
                style={styles.icon}
            />
        ),
    })

    render() {
        return (

            <Container>

                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />

                <Content style={{ padding: 20, marginBottom: 20 }}>
                    <ThumbnailCompoent />
                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});