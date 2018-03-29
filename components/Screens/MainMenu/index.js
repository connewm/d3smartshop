import React, { Component } from 'react';
import { Container, Header, Content, Button, Left,
Right, Body, Icon, Text } from 'native-base';
import styles from './styles';

export default class MainMenu extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerStyle}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Settings')}
            >
              <Icon style={styles.iconStyle}name='settings' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}>Main Menu</Text>
          </Body>
          <Right />
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('FindItems')}
          >
            <Text style={styles.buttonText}>Find Items</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('MyLists')}
          >
            <Text style={styles.buttonText}>My Lists</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Favorites')}
          >
            <Text style={styles.buttonText}>Favorites</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Coupons')}
          >
            <Text style={styles.buttonText}>Coupons</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('ShoppingList')}
          >
            <Text style={styles.buttonText}>Shopping List</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}
