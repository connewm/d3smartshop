import React, { Component } from 'react';
import { Container, Header, Content, Button, Switch,
Right, Left, Body, Icon, Text, List, Card, CardItem } from 'native-base';
import styles from './styles';

export default class Settings extends Component {
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
            <Text style={styles.headerText}>Settings</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle} name='more' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <List style={styles.listStyle}>
            <Card style={styles.cardStyle}>
              <CardItem>
                <Body>
                  <Text style={styles.textStyle}>Account</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('AccountSettings')}
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.textStyle}>Stores</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('StoreSettings')}
                  >
                    <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.textStyle}>Budget</Text>
                </Body>
                <Right>
                  <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('BudgetSettings')}
                  >
                  <Icon style={styles.iconStyle}name='arrow-forward' />
                  </Button>
                </Right>
              </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.textStyle}>
                  Notify for coupons on items in my Favorites list
                </Text>
              </Body>
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
