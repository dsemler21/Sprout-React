import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { DateContainer, DayOfTheWeekText } from '../components/reminder/DateComponents';
import Reminder from '../components/reminder/Reminder';

const ScheduleView = styled(View)`
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
        <DateContainer>
          <DayOfTheWeekText>Today</DayOfTheWeekText>
        </DateContainer>
        <Reminder />
      </ScheduleView>
    );
  }
}