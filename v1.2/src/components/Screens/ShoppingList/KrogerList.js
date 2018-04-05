import React, { Component } from 'react';
import { Card, Text, Button, List, ListItem, Header, Body, Left, Right, Icon,
Container, Content } from 'native-base';
import styles from './styles';

const items = [
  {
    name: 'Apple',
    krogPrice: '$1.79'
  },
  {
    name: 'Bud Light',
    krogPrice: '$18.49'
  },
  {
    name: 'White Bread',
    krogPrice: '$1.99'
  },
  {
    name: 'Nacho Cheese Doritos',
    krogPrice: '$3.99'
  },
  {
    name: 'Coke',
    krogPrice: '$2.29'
  },
  {
    name: 'Eggs',
    krogPrice: '$3.29'
  },
  {
    name: 'Fruity Pebbles',
    krogPrice: '$3.29'
  },
  {
    name: '2% Milk',
    krogPrice: '$2.39'
  },
  {
    name: 'Peanut Butter',
    krogPrice: '$2.79'
  },
  {
    name: 'Tide Pods',
    krogPrice: '$11.99'
  }
];

export default class KrogerList extends Component {
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
            <Text style={styles.headerText}>Kroger</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='more' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <Card>
            <ListItem itemDivider>
              <Text style={{ fontWeight: 'bold' }}>Total:</Text>
              <Right>
                <Text>$49.98</Text>
              </Right>
            </ListItem>
            <List
            dataArray={items}
              renderRow={(item) =>
              <ListItem>
                <Text>{item.name}: {item.krogPrice}</Text>
              </ListItem>}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}
