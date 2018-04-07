import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Card, CardItem,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

const screenHeight = Dimensions.get('window').height;
//const screenWidth = Dimensions.get('window').width;

class CouponCard extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header style={styles.headerStyle}>
          <Left>
            <Button
            transparent
            onPress={() => this.prop.navigation.goBack()}
            >
              <Icon style={styles.iconStyle}name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ position: 'absolute' }}>
            <Text style={styles.headerText}>{this.props.navigation.state.params.name}</Text>
          </Body>
          <Right />
        </Header>

          <Content
          padder contentContainerStyle={{ justifyContent: 'space-evenly' }}
          >
            <Card>
              <CardItem>
                <Image
                style={{ height: screenHeight / 2, flex: 1 }}
                source={this.props.navigation.state.params.pic}
                />
              </CardItem>
            </Card>
          </Content>

        </Container>
    );
  }
}

export default CouponCard;
