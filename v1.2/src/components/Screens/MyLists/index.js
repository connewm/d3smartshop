import React, { Component } from 'react';
import { Container, Header, Content, Button,
Right, Left, Body, Icon, Text, List, ListItem } from 'native-base';
import styles from './styles';

const lists = [
  {
    title: 'List 1',
    link: 'List1'
  },
  {
    title: 'List 2',
    link: 'List2'
  },
  {
    title: 'List 3',
    link: 'List3'
  },
  {
    title: 'List 4',
    link: 'List4'
  },
  {
    title: 'List 5',
    link: 'List5'
  },
  {
    title: 'List 6',
    link: 'List6'
  }
];

class MyLists extends Component {
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
            <Text style={styles.headerText}>My Lists</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='add' />
            </Button>
          </Right>
        </Header>

        <Content
        padder contentContainerStyle={{ justifyContent: 'space-evenly' }}
        >
          <List
          dataArray={lists}
          renderRow={(list) =>
            <ListItem>
              <Text style={styles.textStyle}>{list.title}</Text>
              <Body />
              <Right>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate(list.link)}
                >
                  <Icon style={styles.iconStyle}name='arrow-forward' />
                </Button>
              </Right>
            </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default MyLists;
