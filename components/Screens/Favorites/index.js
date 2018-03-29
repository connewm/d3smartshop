import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

export default class Favorites extends Component {
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
            <Text style={styles.headerText}>Favorites</Text>
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
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Item1')}
          >
            <Text style={styles.buttonText}>Item 1</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Item2')}
          >
            <Text style={styles.buttonText}>Item 2</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Item3')}
          >
            <Text style={styles.buttonText}>Item 3</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Item4')}
          >
            <Text style={styles.buttonText}>Item 4</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Item5')}
          >
            <Text style={styles.buttonText}>Item 5</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}
