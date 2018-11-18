import React from 'react';
import { Text } from 'react-native';

export class Medium extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'SF-Pro-Display-Medium' }]} />;
  }
}

export class Semibold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'SF-Pro-Display-Semibold' }]} />;
  }
}

export class Bold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'SF-Pro-Display-Bold' }]} />;
  }
}