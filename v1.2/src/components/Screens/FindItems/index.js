import React, { Component } from 'react';
import { Container, Button, Text, Header, Item, Thumbnail,
Icon, Input, Content, Body, Left, Right } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import styles from './styles';

const beer = require('../../../../assets/Beer_clip.jpg');
const bread = require('../../../../assets/Bread_clip.jpg');
const chips = require('../../../../assets/Chips_clip.jpg');
const egg = require('../../../../assets/Egg_clip.jpg');
const fruit = require('../../../../assets/Fruit_clip.jpg');
const milk = require('../../../../assets/Milk_clip.png');
const soda = require('../../../../assets/Soda_clip.jpg');
const cereal = require('../../../../assets/Cereal_clip.jpg');
const veggies = require('../../../../assets/Veggies_clip.jpg');

const bottom = 15;
const side = 30;

export default class FindItems extends Component {
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
            <Text style={styles.headerText}>Find Items</Text>
          </Body>
          <Right />
        </Header>

          <Content searchBar rounded>
            <Item rounded>
              <Icon style={styles.iconStyle} name="md-search" />
              <Input placeholder="Search" />
            </Item>
            <Body>
              <Button transparent style={{ marginBottom: 30 }}>
                <Text>Search</Text>
              </Button>
            </Body>

          <Grid>
            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginLeft: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={beer} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginLeft: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={bread} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginLeft: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={chips} />
                </Button>
              </Row>
            </Col>

            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: bottom }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={egg} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={fruit} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={milk} />
                </Button>
              </Row>
            </Col>
            <Col>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginRight: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={soda} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginRight: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={cereal} />
                </Button>
              </Row>
              <Row style={{ justifyContent: 'center', marginBottom: bottom, marginRight: side }}>
                <Button large rounded style={styles.buttonStyle}>
                  <Thumbnail source={veggies} />
                </Button>
              </Row>
            </Col>
          </Grid>
          </Content>
      </Container>
    );
  }
}
