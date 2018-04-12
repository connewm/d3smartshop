import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';
import styles from './styles';

export default class FAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Fab
          active={this.state.active}
          direction='up'
          //containerStyle= {{ }}
          style={styles.fabStyle}
          position='bottomRight'
          onPress={() => this.setState({ active: !this.state.active })}
        >

          <Icon name='share' />
          <Button style={styles.buttonStyle}>
            <Icon name='mail' />
          </Button>
          <Button style={styles.buttonStyle}>
            <Icon name='chatboxes' />
          </Button>
        </Fab>
      </View>
    );
  }
}
