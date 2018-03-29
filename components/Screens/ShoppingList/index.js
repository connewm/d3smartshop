import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

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
          <Body large>
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
          <Text style={{ textAlign: 'center', fontSize: 25 }}>
            You do not currently have anything in your shopping list!
          </Text>
        </Content>

      </Container>
    );
  }
}
