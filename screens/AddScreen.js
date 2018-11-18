import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


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
      <View style={styles.container}>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
