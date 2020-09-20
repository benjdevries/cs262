import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [birthdays, setBirthdays] = useState([]);
  const [age, setAge] = useState(0)

  const clickHandler = () => {
    let newAge = age + 1
    setAge(newAge)
    setBirthdays(
      birthdays.concat({ key: newAge.toString() })
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)}

      />
      <Text>{name} is {age} years old!</Text>
      <View style={styles.button}>
        <Button title=' birthday ' onPress={clickHandler} />
      </View>

      <FlatList
        data={birthdays}
        renderItem={({ item }) => (
          <Text>{item.key}</Text>
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  button: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },


});
