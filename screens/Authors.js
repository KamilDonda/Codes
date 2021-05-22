import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function Authors () {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigPurple: {
      color: '#9900ff',
      fontWeight: 'bold',
      fontSize: 30,
    },
    darkPurple: {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 20,
    },
    mediumPurple: {
      color: 'mediumpurple',
      fontWeight: 'bold',
      fontSize: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.bigPurple}>• Kamil Donda </Text>
      <Text style={styles.bigPurple}>• Robert Kwoll  </Text>
      <Text style={styles.bigPurple}>• Daniel Piątek </Text>
      <Text style={styles.bigPurple}>• Robert Olej </Text>
      <Text style={styles.darkPurple}> Jesteśmy studentami, </Text>
      <Text style={styles.darkPurple}> a to jest nasz projekt. </Text>
      <Text style={styles.mediumPurple}> Kontakt: mail@mail.pl </Text>


    </View>
  );
}