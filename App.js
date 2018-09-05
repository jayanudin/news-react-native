import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { Container, Content, Drawer, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import AboutScreen from './src/Screen/AboutScreen'
import HomeScreen from './src/Screen/HomeScreen';

export default class App extends React.Component {


  render() {
    return (

      <MyApp />

    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);
const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})