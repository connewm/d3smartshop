import React, { Component } from 'react';
import { Item, Input, Icon, Button, Text, Content, Body } from 'native-base';
import styles from './styles';

export default class CouponSearch extends Component {
  render() {
    return (
      <Content
      padder contentContainerStyle={{ justifyContent: 'space-evenly' }}
      >
        <Item>
          <Icon style={styles.iconStyle}name='md-search' />
          <Input placeholder='Search' />
        </Item>

        <Body>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Body>
      </Content>
    );
  }
}
