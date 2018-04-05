import React, { Component } from 'react';
import { Container, Header, Content, Button, Card,
Right, Left, Body, Icon, Text, List, ListItem, Thumbnail } from 'native-base';
import styles from './styles';

const apple = require('../../../../assets/apple.jpg');
const ncdoritos = require('../../../../assets/chips.jpg');
const coke = require('../../../../assets/coke.jpg');
const eggs = require('../../../../assets/eggs.jpg');
const fpebbles = require('../../../../assets/fruitypebbles.jpeg');
const ham = require('../../../../assets/ham.jpeg');
const cheese = require('../../../../assets/cheese.jpg');

const items = [
  {
    name: 'Apple',
    image: apple,
  },
  {
    name: 'Nacho Cheese Doritos',
    image: ncdoritos,
  },
  {
    name: 'Coke',
    image: coke,
  },
  {
    name: 'Eggs',
    image: eggs,
  },
  {
    name: 'Fruity Pebbles',
    image: fpebbles,
  },
  {
    name: 'Ham',
    image: ham
  },
  {
    name: 'Cheese',
    image: cheese
  }
];

export default class List1 extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerStyle}>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon style={styles.iconStyle}name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ position: 'absolute' }}>
            <Text style={styles.headerText}>List 1</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='add' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <Card>
            <List
            dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Body>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </Body>
                <Right>
                  <Thumbnail large square source={item.image} />
                </Right>
              </ListItem>}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
