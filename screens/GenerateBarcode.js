import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Barcode from "react-native-barcode-builder";
import bg from "../assets/background.png";
import darkbg from "../assets/darkBackground.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function GenerateBarcode() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    day: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    data: {
      fontSize: 18,
      fontWeight: "bold",
    },
    input: {
      width: "90%",
      borderRadius: 10,
      height: 50,
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: "center",
    },
    code: {
      flexDirection: "row",
      height: 80,
      width: 300,
      borderRadius: 20,
      margin: 10,
      backgroundColor: "#1B87E5",
      alignItems: "center",
      marginBottom: 40,
    },
    menu: {
      margin: 10,
    },
    info: {
      fontSize: 24,
      fontWeight: "bold",
      margin: 10,
    },
    lightThemeText: {
      color: "#1D1D1D",
    },
    darkThemeText: {
      color: "#F8F2F2",
    },
    lightThemeButton: {
      color: "#F8F2F2",
    },
    darkThemeButton: {
      color: "#1D1D1D",
    },
    lightThemeBackground: {
      backgroundColor: "#FFFFFF",
    },
    darkThemeBackround: {
      backgroundColor: "#1D1D1D",
    },
  });

  const [text, onChangeText] = React.useState("");
  const [date, SetDate] = React.useState("");
  const [hour, SetHour] = React.useState("");

  React.useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;

    SetDate(date + "/" + month + "/" + year);
    SetHour(hours + ":" + min);
  }, [text]);

  const colorScheme = useColorScheme();
  const themeBackgroundStyle =
    colorScheme === "light"
      ? styles.lightThemeBackground
      : styles.darkThemeBackround;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeButtonStyle =
    colorScheme === "light" ? styles.lightThemeButton : styles.darkThemeButton;

  return (
    <ImageBackground
      source={colorScheme === "light" ? bg : darkbg}
      style={[{ flex: 1 }, themeBackgroundStyle]}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.day}>
          <Text style={[styles.data, themeTextStyle]}>{date}</Text>
          <Text style={[styles.data, themeTextStyle]}>{hour}</Text>
        </View>
        {text ? <Barcode value={text} format="CODE128" /> : <Text></Text>}
        <TextInput
          style={[styles.input, themeTextStyle]}
          onChangeText={onChangeText}
          value={text}
          placeholder="Wprowadź kod"
          placeholderTextColor={colorScheme === "light" ? "#1D1D1D" : "#F8F2F2"}
        />
        <TouchableOpacity style={styles.code}>
          <MaterialIcons name="save" size={70} style={styles.menu} />
          <Text style={[styles.info, themeButtonStyle]}>Zapisz kod</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
