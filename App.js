import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const [randomNumbers, setRandomNumbers] = useState(Array(6).fill(0));

  function generateRandomNumber() {
    return Math.ceil(Math.random() * 60);
  }

  return (
    <View style={styles.container}>
      <Text>{randomNumbers.join(', ')}</Text>
      <Button title="Gerar números" onPress={
        () => setRandomNumbers(randomNumbers.map(() => generateRandomNumber()))
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
