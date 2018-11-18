import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Plant overview',
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
        <Text style={styles.date}>
          Thursday
        </Text>
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
  contentContainer: {
    paddingTop: 30,
  },
});