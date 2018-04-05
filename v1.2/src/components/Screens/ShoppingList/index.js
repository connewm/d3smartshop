import React, { Component } from 'react';
import { Container, Header, Content, Button, List, ListItem, Card, CardItem,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

const items = [
  {
    name: 'Apple',
    krogPrice: '$1.79',
    giantEagPrice: '$1.99',
    meijerPrice: '$1.39'
  },
  {
    name: 'Bud Light',
    krogPrice: '$18.49',
    giantEagPrice: '$18.49',
    meijerPrice: '$18.49'
  },
  {
    name: 'White Bread',
    krogPrice: '$1.99',
    giantEagPrice: '$2.99',
    meijerPrice: '$1.79'
  },
  {
    name: 'Nacho Cheese Doritos',
    krogPrice: '$2.99',
    giantEagPrice: '$3.99',
    meijerPrice: '$4.29'
  },
  {
    name: 'Coke',
    krogPrice: '$1.67',
    giantEagPrice: '$2.29',
    meijerPrice: '$1.67'
  },
  {
    name: 'Eggs',
    krogPrice: '$3.29',
    giantEagPrice: '$3.29',
    meijerPrice: '$2.99'
  },
  {
    name: 'Fruity Pebbles',
    krogPrice: '$2.49',
    giantEagPrice: '$3.29',
    meijerPrice: '$3.39'
  },
  {
    name: '2% Milk',
    krogPrice: '$2.49',
    giantEagPrice: '$2.39',
    meijerPrice: '$1.79'
  },
  {
    name: 'Peanut Butter',
    krogPrice: '$2.79',
    giantEagPrice: '$2.59',
    meijerPrice: '$2.59'
  },
  {
    name: 'Tide Pods',
    krogPrice: '$11.99',
    giantEagPrice: '$12.99',
    meijerPrice: '$11.99'
  }
];

export default class ShoppingList extends Component {
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
            <Text style={styles.headerText}>Shopping List</Text>
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
            <CardItem>
              <ListItem itemDivider>
                <Text style={{ fontWeight: 'bold' }}>Kroger:</Text>
                <Body>
                  <Text>$49.98</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('KrogerList')}
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </ListItem>
              <List
              dataArray={items}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item.name}: {item.krogPrice}</Text>
                  </ListItem>
                }
              />
              </CardItem>

              <CardItem>
              <ListItem itemDivider>
                <Text style={{ fontWeight: 'bold' }}>Meijer:</Text>
                <Body>
                  <Text>$50.38</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </ListItem>
              <List
              dataArray={items}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item.name}: {item.meijerPrice}</Text>
                  </ListItem>
                }
              />
              </CardItem>

              <CardItem>
              <ListItem itemDivider>
                <Text style={{ fontWeight: 'bold' }}>Giant Eagle:</Text>
                <Body>
                  <Text>$51.01</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </ListItem>
              <List
              dataArray={items}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item.name}: {item.giantEagPrice}</Text>
                  </ListItem>
                }
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
