import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text, Input, Item } from 'native-base';
import styles from './styles';

export default class Coupons extends Component {
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
            <Text style={styles.headerText}>Coupons</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='more' />
            </Button>
          </Right>
        </Header>

        <Content searchBar rounded>
        <Item rounded>
          <Icon style={styles.iconStyle} name="md-search" />
          <Input placeholder='Search' />
        </Item>
        <Body>
        <Button transparent>
          <Text>Search</Text>
        </Button>
        </Body>
        </Content>

      </Container>
    );
  }
}
