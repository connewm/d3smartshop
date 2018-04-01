import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Card, CardItem,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

const applePic = require('../../../../assets/apple.jpg');

const screenHeight = Dimensions.get('window').height;

export default class ItemCardApple extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerText}>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon style={styles.iconStyle}name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text>Apple</Text>
          </Body>
          <Right />
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <Card style={styles.cardStyle}>
            <CardItem cardBody>
              <Image style={{ height: screenHeight / 2, flex: 1 }}source={applePic} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
