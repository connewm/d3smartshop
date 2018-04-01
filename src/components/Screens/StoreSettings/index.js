import React, { Component } from 'react';
import { Container, Header, Content, Button, Switch,
Right, Left, Body, Icon, Text, List, CardItem, Card } from 'native-base';
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

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-between' }}
        >
          <List style={styles.listStyle}>
            <Card style={styles.cardStyle}>
              <CardItem header>
                <Left />
                <Body />
                <Right>
                  <Switch value={false} />
                </Right>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Current List</Text>
                </Left>
                <Body />
                <Right>
                  <Button transparent>
                    <Icon style={styles.iconStyle}name='add' />
                  </Button>
                </Right>
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Store #1</Text>
                </Left>
                <Body />
                <Right />
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Store #2</Text>
                </Left>
                <Body />
                <Right />
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Store #3</Text>
                </Left>
                <Body />
                <Right />
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Store #4</Text>
                </Left>
                <Body />
                <Right />
              </CardItem>

              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Store #5</Text>
                </Left>
                <Body />
                <Right />
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Text style={styles.textStyle}>Stores in Radius</Text>
                </Left>
                <Right>
                  <Switch value={false} />
                </Right>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}
