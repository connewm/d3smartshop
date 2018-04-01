import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, View, Toast,
Right, Left, Body, Icon, Text, List, ListItem, Thumbnail } from 'native-base';
import styles from './styles';

const apple = require('../../../../assets/apple.jpg');
const budlight = require('../../../../assets/beer.jpeg');
const whitebread = require('../../../../assets/bread.jpeg');
const ncdoritos = require('../../../../assets/chips.jpg');
const coke = require('../../../../assets/coke.jpg');
const eggs = require('../../../../assets/eggs.jpg');
const fpebbles = require('../../../../assets/fruitypebbles.jpeg');
const milk2 = require('../../../../assets/milk.jpeg');
const pb = require('../../../../assets/peanutbutter.jpg');
const tidepods = require('../../../../assets/tide.jpeg');

const items = [
  {
    name: 'Apple',
    image: apple,
  },
  {
    name: 'Bud Light',
    image: budlight,
  },
  {
    name: 'White Bread',
    image: whitebread,
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
    name: '2% Milk',
    image: milk2,
  },
  {
    name: 'Peanut Butter',
    image: pb,
  },
  {
    name: 'Tide Pods',
    image: tidepods,
  }
];

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: items
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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
          <Body>
            <Text style={styles.headerText}>Favorites</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='add' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly' }}
        >
          <View>
            <List
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={item =>
                <ListItem>
                    <Body>
                      <Button
                      transparent
                      onPress={() => this.props.navigation.navigate('ItemCardApple')}
                      >
                        <Text style={styles.textStyle}>{item.name}</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Thumbnail large square source={item.image} />
                    </Right>
                </ListItem>}
              renderLeftHiddenRow={item =>
                <Button
                full success onPress={() => Toast.show({
                  text: `${item.name} has been added to your Shopping Cart`,
                  position: 'bottom',
                  type: 'success',
                  duration: 1000
                })}
                >
                  <Icon active name='cart' />
                </Button>}
              renderRightHiddenRow={(item, secId, rowId, rowMap) =>
                <Button
                full danger
                onPress={() => {
                  this.deleteRow(secId, rowId, rowMap);
                  Toast.show({
                    text: `${item.name} has been removed from your Favorites`,
                    position: 'bottom',
                    type: 'danger',
                    duration: 1000,
                  });
                }}
                >
                  <Icon active name='trash' />
                </Button>}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Favorites;
