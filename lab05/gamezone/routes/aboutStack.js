import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About GameZone"
                component={About}
                options={{
                    headerTitle: () => <Header navigation={navigation} title=' About GameZone     ' /> // these extra spaces are a weird artifact of my OnePlus phone. Without them, the text gets cut off. It works fine in the browser though.
                }}
            />
        </Stack.Navigator>
    );
};