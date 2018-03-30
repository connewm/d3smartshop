import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text, List, ListItem, Thumbnail, View } from 'native-base';
import styles from './styles';

const apple = require('../../../../assets/apple.jpg');
const beer = require('../../../../assets/beer.jpeg');
const bread = require('../../../../assets/bread.jpeg');
const chips = require('../../../../assets/chips.jpg');
const coke = require('../../../../assets/coke.jpg');
const eggs = require('../../../../assets/eggs.jpg');
const fruitypebbles = require('../../../../assets/fruitypebbles.jpeg');
const milk = require('../../../../assets/milk.jpeg');
const peanutbutter = require('../../../../assets/peanutbutter.jpg');
const tide = require('../../../../assets/tide.jpeg');

class Favorites extends Component {
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
          <List>
            <ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Apple</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={apple} />
              </View>
              </Right>
            </ListItem>
            <ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Bud Light</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={beer} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Sunbean White Bread</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={bread} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Nacho Cheese Doritos</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={chips} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Coke</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={coke} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Eggs</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={eggs} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Fruity Pebbles</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={fruitypebbles} />
              </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>2% Milk</Text>
              </Button>
              <Body />
              <Right>
                <View>
                  <Thumbnail square source={milk} />
                </View>
              </Right>
            </ListItem><ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Peanut Butter</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={peanutbutter} />
              </View>
              </Right>
            </ListItem>
            <ListItem>
              <Button transparent>
                <Text style={styles.textStyle}>Tide Pods</Text>
              </Button>
              <Body />
              <Right>
              <View>
                <Thumbnail square source={tide} />
              </View>
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}

export default Favorites;
