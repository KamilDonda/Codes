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
      textAlign: "left",
      color: "white",
      fontSize: 26,
      fontWeight: "bold",
    },
    authorsStyle2: {
      marginLeft: 16,
      textAlign: "left",
      alignSelf: 'stretch',
      marginLeft: '13%',
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: "4%"
    },
    names: {
      color: "black",
      fontSize: 16,

      marginTop: 2,
    },
    imageStyle: {
      flex: 1,
      width: "82%",
      height: "82%",
      resizeMode: "contain",
    },
    row: {

      flexDirection: "row",
      justifyContent: "space-between",
    },
    authors: {
      width: 200,
      justifyContent: "space-between",
      marginBottom: '40%'
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
        <Text style={styles.authorsStyle2}> Autorzy: </Text>
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
