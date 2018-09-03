import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, ListItem, Title, Button, Left, Right, Body, Icon, Content } from 'native-base';

export default class DrawerSlide extends React.Component {


    render() {

        return (
            <Content style={{ backgroundColor: '#ffffff' }}>
                <ListItem >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                        <Text>Home</Text>
                    </TouchableOpacity>
                </ListItem>
                <ListItem >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} >
                        <Text>About</Text>
                    </TouchableOpacity>
                </ListItem>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
