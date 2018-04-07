import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text, List, Card, CardItem } from 'native-base';
import styles from './styles';

export default class AccountSettings extends Component {
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
            <Text style={styles.headerText}>Account</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='more' />
            </Button>
          </Right>
        </Header>

        <Content>
          <List style={styles.listStyle}>
            <Card style={styles.cardStyle}>
              <CardItem>
                <Body>
                  <Text style={styles.textStyle}>Account Details</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.textStyle}>Change Password</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}
