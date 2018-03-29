import React, { Component } from 'react';
import { Container, Header, Content, Button, Switch,
Right, Left, Body, Icon, Text, List, ListItem } from 'native-base';
import styles from './styles';

export default class StoreSettings extends Component {
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
            <Text style={styles.headerText}>Stores</Text>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            <ListItem>
            <Left />
            <Body />
            <Right>
              <Switch value={false} />
            </Right>

            <Left />
            <Body>
              <Text>Current List</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon style={styles.iconStyle}name='flame' />
              </Button>
            </Right>
            </ListItem>

            <ListItem>
            <Left />
            <Body>
              <Text>Store #1</Text>
            </Body>
            <Right />
            </ListItem>

            <ListItem>
            <Left />
            <Body>
              <Text>Store #2</Text>
            </Body>
            <Right />

            <Left />
            <Body>
              <Text>Store #3</Text>
            </Body>
            <Right />
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}
