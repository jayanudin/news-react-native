import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Right, Card, Body, CardItem, Thumbnail, Text } from 'native-base'
import { createStackNavigator } from 'react-navigation';


import ThumbnailList from './Components/ThumbnailList';
import ThumbnailDetail from './Components/ThumbnailDetail';


export default class HomeScreen extends React.Component {

    // static navigationOptions = ({ navigation }) => ({
    //     title: "Home",
    //     headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.openDrawer()} />,
    //     drawerLabel: 'Home',
    //     drawerIcon: ({ tintColor }) => (
    //         <Image
    //             source={require('./../../assets/DrawerIcons/home.png')}
    //             style={styles.icon}
    //         />
    //     ),
    // })

    render() {
        return (

            <AppNavigator />


        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Thumbnails: ThumbnailList,
        Details: ThumbnailDetail,
    },
    {
        initialRouteName: 'Thumbnails',
    }
)



const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});