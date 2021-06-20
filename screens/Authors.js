import React from "react";
import { StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import bg from "../assets/background.png";
export default function Authors() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    authorsStyle: {
      marginLeft: 16,
      textAlign: "center",
      color: "white",
      fontSize: 26,
      fontWeight: "bold",
    },
    names: {
      color: "white",
      fontSize: 24,
      margin: 2,
    },
    imageStyle: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    authors: {
      width: 300,
      justifyContent: "space-between",
    },
  });

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={styles.authorsStyle}> Organizacje </Text>
        <Image
          style={styles.imageStyle}
          source={require("../assets/authorsAsset.png")}
        />
        <Text style={styles.authorsStyle}> Autorzy </Text>
        <View style={styles.authors}>
          <View style={styles.row}>
            <Text style={styles.names}>Kamil Donda</Text>
            <Text style={styles.names}>Daniel Piątek</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.names}>Robert Kwoll</Text>
            <Text style={styles.names}>Robert Olej</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
