//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold',
  }
};

//Make component available to other parts of app
export { Header };
