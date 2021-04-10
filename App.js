import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../Codes/Menu';


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
    <Menu />
      <Text>Test</Text>
      <Text>Działa u mnie - Robert Kwoll</Text>
      <StatusBar style="auto" />
    </View>
  );
}
