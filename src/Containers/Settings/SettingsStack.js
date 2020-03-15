import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from './SettingsScreen';
import AboutScreen from './MenuOptions/AboutScreen';
import InstructionsScreen from './MenuOptions/InstructionScreen';
import AccountScreen from './MenuOptions/AccountScreen';

const Stack = createStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
            <Stack.Screen name="InstructionsScreen" component={InstructionsScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;