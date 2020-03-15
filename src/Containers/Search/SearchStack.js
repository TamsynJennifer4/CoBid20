import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

export default SearchStack;