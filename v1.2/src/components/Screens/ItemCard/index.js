import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Card, CardItem,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

const screenHeight = Dimensions.get('window').height;

export default class ItemCard extends Component {
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
            <Text style={styles.headerText}>{this.props.navigation.state.params.name}</Text>
          </Body>
          <Right>
            <Button
            transparent
            onPress={() => this.setModalVisible()}
            >
              <Icon style={styles.iconStyle}name='add' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
        >
          <Card>
            <CardItem>
              <Image
              style={{ height: screenHeight / 2, flex: 1 }}
              source={this.props.navigation.state.params.image}
              />
            </CardItem>
          </Card>
          <Button
          large full style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('ItemCoupon')}
          >
            <Text>Coupons</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
