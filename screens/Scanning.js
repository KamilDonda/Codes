import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

export default function Scanning() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <View style={styles.container}>
      <Text> Skanowanie </Text>
      <Button
      title="Click Here"
      />
    </View>
  );
}
