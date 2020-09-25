import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
  }

});