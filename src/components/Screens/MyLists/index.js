import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';

export default class MyLists extends Component {
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
            <Text style={styles.headerText}>My Lists</Text>
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
          <Button
            large full danger style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('List1')}
          >
            <Text style={styles.buttonText}>List 1</Text>
          </Button>
          <Button
            large full warning style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('List2')}
          >
            <Text style={styles.buttonText}>List 2</Text>
          </Button>
          <Button
            large full success style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('List3')}
          >
            <Text style={styles.buttonText}>List 3</Text>
          </Button>
          <Button
            large full info style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('List4')}
          >
            <Text style={styles.buttonText}>List 4</Text>
          </Button>
          <Button
            large full style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('List5')}
          >
            <Text style={styles.buttonText}>List 5</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}
