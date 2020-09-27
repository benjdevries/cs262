import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'pretty good', key: '1' },
        { title: 'Mario', rating: 3, body: 'bowser sux', key: '2' },
        { title: 'Pokemon', rating: 4, body: 'I caught them all!', key: '3' },
    ]);

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}
