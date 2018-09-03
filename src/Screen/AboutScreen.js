import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import CustomHeader from './../CustomHeader'

export default class AboutScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: "About",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.openDrawer()} />,
        drawerLabel: 'About',
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

                <CustomHeader title="About" drawerOpen={() => this.props.navigation.openDrawer()} />

                <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>About</Text>
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