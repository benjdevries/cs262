import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import PlayerDetails from '../screens/playerDetails';

const Stack = createStackNavigator();
export default function HomeStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#ddd' }
        }}>
            <Stack.Screen
                name="GameZone"
                component={Home}
                options={{
                    headerTitle: () => <Header navigation={navigation} title=' GameZone ' />
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={PlayerDetails}
                options={{ title: 'Player Details' }}
            />
        </Stack.Navigator>
    );
};
