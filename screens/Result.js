import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
  useColorScheme,
  AsyncStorage
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Barcode from "react-native-barcode-builder";
import bg from "../assets/background.png";
import darkbg from "../assets/darkBackground.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function Result({ route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    day: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 20,
      color: "#2E2727",
    },
    data: {
      fontSize: 18,
      color: "#1D1D1D",
      fontWeight: "bold",
    },
    result: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 2,
      color: "#2E2727",
      textAlign: "center",
    },
    code: {
      flexDirection: "row",
      height: 70,
      width: 300,
      borderRadius: 20,
      margin: 10,
      backgroundColor: "#1B87E5",
      alignItems: "center",
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
  }, []);

  loadHistory = async () => {
    try{
      if(state.names.length == 0){
        if(JSON.parse(await AsyncStorage.getItem('history')) != 0)
          state.names = JSON.parse(await AsyncStorage.getItem('history'));
      }
    }catch(error){
      alert(error);
    }
    saveCode()
  }

  saveCode = () =>{
    let index;
    if(state.names.length == 0)
      index = 0;
    else 
      index = state.names[state.names.length - 1].id + 1;
    let data = {
       id: index,
       name: route.params.data,
       type: route.params.id === 256 ? "QrCode" :"Barcode"
   };

   const exists = state.names.some(v => (v.name === data.name && v.type === data.type));
   if(!exists){
    state.names.push(data);
    AsyncStorage.setItem('history',JSON.stringify(state.names));
    console.warn('Dodano kod');
   }
 }

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
        {route.params.data &&
        (route.params.data.includes("://") || route.params.id === 256) ? (
          <QRCode
            value={route.params.data}
            size={120}
            bgColor="#000000"
            fgColor="#FFFFFF"
          />
        ) : (
          <Barcode value={route.params.data} format="CODE128" />
        )}
        <Text style={[styles.result, themeTextStyle]}>{route.params.data}</Text>
        <TouchableOpacity style={styles.code} onPress={saveCode}>
          <MaterialIcons name="save" size={60} style={styles.menu} />
          <Text style={[styles.info, themeButtonStyle]}>Zapisz kod</Text>
        </TouchableOpacity>
        {route.params.data &&
        (route.params.data.includes("://") && route.params.id === 256) ? (
          <TouchableOpacity
            onPress={() => Linking.openURL(route.params.data)}
            style={styles.code}
          >
            <Entypo name="link" size={60} style={styles.menu} />
            <Text style={[styles.info, themeButtonStyle]}>Otw??rz URL</Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
        <View style={{ marginBottom: 25 }}></View>
      </View>
    </ImageBackground>
  );
}
