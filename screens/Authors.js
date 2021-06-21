import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  useColorScheme,
} from "react-native";
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
      fontSize: 26,
      fontWeight: "bold",
    },
    names: {
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
    lightThemeText: {
      color: "white",
    },
    darkThemeText: {
      color: "black",
    },
  });

  const colorScheme = useColorScheme();
  //const themeBackgroundStyle = colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  
  console.log(colorScheme + " omg")

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={[styles.authorsStyle , themeTextStyle]}> Organizacje </Text>
        <Image
          style={styles.imageStyle}
          source={require("../assets/authorsAsset.png")}
        />
        <Text style={[styles.authorsStyle, themeTextStyle]}> Autorzy </Text>
        <View style={styles.authors}>
          <View style={styles.row}>
            <Text style={[styles.names, themeTextStyle]}>Kamil Donda</Text>
            <Text style={[styles.names, themeTextStyle]}>Daniel Piątek</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.names, themeTextStyle]}>Robert Kwoll</Text>
            <Text style={[styles.names, themeTextStyle]}>Robert Olej</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
