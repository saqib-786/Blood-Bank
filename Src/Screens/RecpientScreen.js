import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {StyleSheet}from 'react-native';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container styes={{backgroundColor: 'white'}}>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.props.navigation.navigate('Donors')}  >
              <Text>Donors</Text>
            </Button>
            <Button active>
              <Text>Recipient</Text>
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('My Team')} >
              <Text>My Team</Text>
            </Button >
            <Button onPress={()=>this.props.navigation.navigate('Profile')}>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  Container:{
    color: 'black'
  }
})