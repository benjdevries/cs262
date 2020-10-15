import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function PlayerDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.name}</Text>
                <Text>{route.params.email}</Text>
                <Text>Player ID: {route.params.id}</Text>
            </Card>
        </View>
    );
}
