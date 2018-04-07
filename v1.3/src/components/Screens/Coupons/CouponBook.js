import React, { Component } from 'react';
import { Content, List, ListItem, Thumbnail, Right, Button, Left,
Text } from 'native-base';
import styles from './styles';

const frostflakes = require('../../../../assets/FrostedFlakes.png');
const brownie = require('../../../../assets/Brownies.png');
const oliveOil = require('../../../../assets/OliveOil.png');

const coupons = [
  {
    name: 'Chocolate Froasted Flakes',
    pic: frostflakes
  },
  {
    name: 'Brownie Mix',
    pic: brownie
  },
  {
    name: 'Olive Oil',
    pic: oliveOil
  }
];

class CouponBook extends Component {
  render() {
    return (
      <Content
      padder contentContainerStyle={{ justifyContent: 'space-evenly' }}
      >
        <List
        dataArray={coupons}
        renderRow={(coupon) =>
          <ListItem>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate(
              'CouponCard', { name: coupon.name, pic: coupon.pic })}
            >
              <Text style={styles.textStyle}>{coupon.name}</Text>
            </Button>
          </Left>
          <Right>
            <Thumbnail large square source={coupon.pic} />
          </Right>
          </ListItem>}
        />
      </Content>
    );
  }
}

export default CouponBook;
