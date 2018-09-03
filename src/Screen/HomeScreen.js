import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Right, Card, Body, CardItem, Thumbnail, Text } from 'native-base'



import CustomHeader from './../CustomHeader'

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
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Image source={{ uri: './../../assets/DrawerIcons/Unsure-Programmer-Logo.png' }} style={{ height: 200, width: null, flex: 1 }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    his tutorial series which Covers a tab boilerplate to help you quickly get your tab based app setup. It uses custom fonts, ex-navigation and nativebase components saving you a lot of setup and exploration time
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
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