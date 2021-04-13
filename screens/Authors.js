import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function Authors () {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <View style={styles.container}>
      <Text> Autorzy  </Text>
      <Button
      title="Click Here"
      />
    </View>
  );
}