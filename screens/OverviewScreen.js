import React from 'react';
import { ExpoConfigView } from '@expo/samples';


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
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
