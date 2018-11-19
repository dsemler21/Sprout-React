import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const ReminderContainer = styled(View)`
    height: 64px;
    border: 1px solid #E6E6E6;
`;

const ReminderText = styled(Text)`
    font-family: 'SF-Pro-Display-Regular';
    font-size: 18px;
    padding-left: 15px;
    padding-top: 22px;
    padding-bottom: 22px;
`;

export default class Reminder extends React.Component {

    render() {
        return (
            <ReminderContainer>
                <ReminderText>
                    Water {this.props.name}
                </ReminderText>
            </ReminderContainer>
        );
    }

}
