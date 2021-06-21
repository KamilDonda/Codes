import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  useColorScheme
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import bg from "../assets/background.png";
import darkbg from "../assets/darkBackground.png";

export default function Generating({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    code: {
      flexDirection: "row",
      height: 80,
      width: 300,
      borderRadius: 20,
      margin: 10,
      backgroundColor: "#1B87E5",
      alignItems: "center",
      marginBottom: 60,
    },
    menu: {
      margin: 10,
    },
    info: {
      fontSize: 24,
      fontWeight: "bold",
      margin: 10,
      color: "#F8F2F2",
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
        <TouchableOpacity
          style={styles.code}
          onPress={() => navigation.navigate("Barcode Generator")}
        >
          <AntDesign name="barcode" size={70} style={styles.menu} />
          <Text style={[styles.info, themeTextStyle]}>Barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.code}
          onPress={() => navigation.navigate("QRcode Generator")}
        >
          <MaterialCommunityIcons name="qrcode" size={70} style={styles.menu} />
          <Text style={[styles.info, themeTextStyle]}>QRcode</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
