import React, { Component } from 'react';
import { Container, Header, Content, Button, Switch,
Right, Left, Body, Text, Item, Input, Icon, Card, CardItem } from 'native-base';
import styles from './styles';

export default class BudgetSettings extends Component {
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
            <Text style={styles.headerText}>Budget</Text>
          </Body>
          <Right>
            <Switch value />
          </Right>
        </Header>

        <Content>
          <Card>
          <CardItem>
          <Left>
            <Text style={styles.textStyle}>Set Budget:</Text>
          </Left>
          <Body />
          <Right>
            <Item regular style={styles.itemStyle}>
              <Input placeholder='$' />
            </Item>
          </Right>
          </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
