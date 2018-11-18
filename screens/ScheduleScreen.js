import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { DayOfTheWeekText } from '../components/reminder/DateComponents';
import Reminder from '../components/reminder/Reminder';
import { resetTime, getDayStringFromDayIndex, dateEquals } from '../utils/dateUtils';

// TODO : should be retrieve from a server by a Service file or something
const testData = require('../example-data/reminders.json');

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
        {this.renderRemindersByDay()}
      </ScheduleView>
    );
  }

  renderRemindersByDay() {
    const remindersGroupedByDay = ScheduleScreen.groupRemindersByDate(testData);
    return remindersGroupedByDay.map(
      (day) => (
        <>
          <DayOfTheWeekText>{day.dayString}</DayOfTheWeekText>
          {this.renderRemindersInDay(day)}
        </>
      )
    );
  }

  renderRemindersInDay(day) {
    return day.reminders.map((reminder) => (<Reminder name={reminder.name} />));
  }

  /**
   * @param data [{date: DateString, name: string}] **IMPORTANT** it assumes that data is ordered by date, ascending
   * // TODO: order it by ourselves {DO NOT TRUST ANY ONE}
   * @return array of reminders grouped by dates according to [{ dayString: string, reminders: [Reminder] }]
   */
  static groupRemindersByDate(data) {
    if (data.length === 0)
      // TODO: return a real designed view
      return (
        <Text>It seems you haven’t added any plants yet tap the “add” button above to start</Text>
      );
    const days = [];
    for (let i = 0; i < data.length;) {
      let actualDay = resetTime(new Date(data[i].date));
      let day = {
        dayString: getDayStringFromDayIndex(actualDay),
        reminders: []
      };
      for (; i < data.length && dateEquals(resetTime(new Date(data[i].date)), actualDay); ++i) {
        day.reminders.push(data[i]);
      }
      days.push(day);
    }
    return days;
  }

}