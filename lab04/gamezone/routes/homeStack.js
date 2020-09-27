import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#eee',
                height: 80,
            }
        }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'GameZone',
                    // headerStyle: {
                    //     backgroundColor: 'red',
                    // }
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title: 'Review Details',
                    headerStyle: {
                        backgroundColor: 'pink',
                    }
                }}
            />
        </Stack.Navigator>
    );
};
