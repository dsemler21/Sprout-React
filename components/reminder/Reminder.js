import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const ReminderContainer = styled(View)`
    
`;

const ReminderText = styled(Text)`

`;

export default class Reminder extends React.Component {

    render() {
        return (
            <ReminderContainer>
                <ReminderText>
                    Water Juliana
                </ReminderText>
            </ReminderContainer>
        );
    }

}
