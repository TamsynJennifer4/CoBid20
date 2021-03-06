import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;