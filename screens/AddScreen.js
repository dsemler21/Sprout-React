import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const AddView = styled(View)`
    flex: 1;
    padding-top: 15px;
    background-color: #fff;
`;

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'New plant',
    headerStyle: {
      backgroundColor: '#EBF0F5',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  };

  render() {
    return (
      <AddView />
    );
  }
}
