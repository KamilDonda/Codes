import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Barcode from "react-native-barcode-builder";

export default function GenerateBarcode() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: "90%",
      borderWidth: 2,
      borderRadius: 10,
      height: 50,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    info: {
      fontSize: 18,
    },
  });

  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {text ? <Barcode value={text} format="CODE128" /> : <Text></Text>}
      <Text style={styles.info}>{text}</Text>
    </View>
  );
}
