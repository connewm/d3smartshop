import React, { Component } from 'react';
import { Container, Button, Text, Header, Item,
Icon, Input, Content, Body, Left, Right } from 'native-base';
import styles from './styles';

export default class FindItems extends Component {
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
            <Text style={styles.headerText}>Find Items</Text>
          </Body>
          <Right />
        </Header>

          <Content searchBar rounded>
          <Item rounded>
            <Icon style={styles.iconStyle} name="md-search" />
            <Input placeholder="Search" />
          </Item>
          <Body>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          </Body>

          <Icon name='beer' />
          </Content>
      </Container>
    );
  }
}
