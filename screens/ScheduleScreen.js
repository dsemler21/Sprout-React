import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { DateContainer, DayOfTheWeekText } from '../components/reminder/DateComponents';
import Reminder from '../components/reminder/Reminder';

const ScheduleView = styled(ScrollView)`
    flex: 1;
    padding-top: 15px;
    background-color: #fff;
`;

export default class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
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
      <ScheduleView>
        <DayOfTheWeekText>Today</DayOfTheWeekText>
        <Reminder name="Juliana" />
        <Reminder name="Beatrix" />
      </ScheduleView>
    );
  }
}