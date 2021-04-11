import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "../Codes/Menu";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.container}>
        <Text>Test</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
