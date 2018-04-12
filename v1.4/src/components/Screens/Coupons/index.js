import React, { Component } from 'react';
import { Container, Header, Button, Tab, Tabs, TabHeading,
Right, Left, Body, Icon, Text } from 'native-base';
import styles from './styles';
import CouponBook from './CouponBook';
import CouponSearch from './CouponSearch';

export default class Coupons extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header hasTabs style={styles.headerStyle}>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon style={styles.iconStyle}name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ position: 'absolute' }}>
            <Text style={styles.headerText}>Coupons</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconStyle}name='more' />
            </Button>
          </Right>
        </Header>

          <Tabs>
            <Tab
            heading={<TabHeading style={styles.tabStyle}>
            <Text style={styles.textStyle}>Coupon Book</Text></TabHeading>}
            >
              <CouponBook navigation={this.props.navigation} tabLabel="Agenda" />
            </Tab>
            <Tab
            heading={<TabHeading style={styles.tabStyle}>
            <Text style={styles.textStyle}>Search</Text></TabHeading>}
            >
              <CouponSearch />
            </Tab>
          </Tabs>
      </Container>
    );
  }
}
