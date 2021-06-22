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
import darkbg from "../assets/darkBackground.png";

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
      fontSize: 24,
      margin: 2,
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
    lightThemeText: {
      color: '#F8F2F2',
    },
    darkThemeText: {
      color: "#1D1D1D",
    },
    lightThemeBackground: {
      backgroundColor: '#FFFFFF'
    },
    darkThemeBackround: {
      backgroundColor: '#1D1D1D'
    }
  });

  const colorScheme = useColorScheme();
  const themeBackgroundStyle = colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  return (
    <ImageBackground source={colorScheme === "light" ? bg : darkbg} style={[{ flex: 1 }, themeBackgroundStyle]} resizeMode="stretch">
      <View style={styles.container}>
        <Text style={[styles.authorsStyle , themeTextStyle]}> Organizacje </Text>
        <Image
          style={styles.imageStyle}
          source={colorScheme === "light" ? require("../assets/authorsAsset.png") :  require("../assets/DarkmodeAuthorsAsset.png")}
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
