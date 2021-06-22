import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  useColorScheme,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import bg from "../assets/background.png";
import darkbg from "../assets/darkBackground.png";

import github from "../assets/github.png";
import github_dark from "../assets/github_dark.png";
import polsl from "../assets/polsl.png";
import rms from "../assets/rms.png";

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
      fontWeight: "bold",
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
      position: "absolute",
      bottom: 15,
    },
    lightThemeText: {
      color: "#F8F2F2",
    },
    darkThemeText: {
      color: "#1D1D1D",
    },
    lightThemeBackground: {
      backgroundColor: "#FFFFFF",
    },
    darkThemeBackround: {
      backgroundColor: "#1D1D1D",
    },
    logoImage: {
      justifyContent: "flex-start",
      width: 70,
      height: 70,
    },
    logoText: {
      justifyContent: "flex-end",
      height: 70,
      textAlignVertical: "center",
      fontSize: 20,
      marginLeft: 50,
    },
  });

  const colorScheme = useColorScheme();
  const themeBackgroundStyle =
    colorScheme === "light"
      ? styles.lightThemeBackground
      : styles.darkThemeBackround;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  const themeLogoTextStyle =
    colorScheme === "light" ? styles.darkThemeText : styles.lightThemeText;

  function logo(a, b, text, link) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginHorizontal: 50,
          height: 100,
          alignItems: "center",
          marginRight: 30
        }}
        onPress={() => Linking.openURL(link)}
      >
        <View>
          <Image
            style={styles.logoImage}
            source={colorScheme === "light" ? a : b}
          />
        </View>
        <View>
          <Text style={[styles.logoText, themeLogoTextStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={colorScheme === "light" ? bg : darkbg}
      style={[{ flex: 1 }, themeBackgroundStyle]}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={{ marginHorizontal: 50, width: "100%" }}>
          {logo(github, github_dark, "Github", "https://github.com/KamilDonda/Codes")}
          {logo(polsl, polsl, "Politechnika Śląska", "https://www.polsl.pl/")}
          {logo(rms, rms, "Wydział Matematyki Stosowanej", "https://www.polsl.pl/rms/")}
        </View>

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
