import React, { Component } from 'react';
import { Container, Header, Content, Button, Switch,
Right, Left, Body, Icon, Text, List, ListItem } from 'native-base';
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
          <Body>
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
          <List style={{ flex: 1 }}>
            <ListItem icon>
              <Left />
              <Body>
                <Text>Stores</Text>
              </Body>
              <Right>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate('StoreSettings')}
                >
                  <Icon style={styles.iconStyle}name='arrow-forward' />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left />
              <Body>
                <Text>Budget</Text>
              </Body>
              <Right>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate('BudgetSettings')}
                >
                <Icon style={styles.iconStyle}name='arrow-forward' />
                </Button>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left />
              <Body>
                <Text>Notify for coupons on items in my Favorites list</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
