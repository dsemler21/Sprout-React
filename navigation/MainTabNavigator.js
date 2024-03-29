import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import AddScreen from '../screens/AddScreen';
import OverviewScreen from '../screens/OverviewScreen';


const HomeStack = createStackNavigator({
  Home: ScheduleScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar` : 'md-ios-calendar'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: AddScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: OverviewScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Plants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-leaf' : 'ios-leaf'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},

  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#EBF0F5',
      }
    }
  });
