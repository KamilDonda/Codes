import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Barcode from "react-native-barcode-builder";
import bg from "../assets/background.png";
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

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View style={styles.container}>
        <View style={styles.day}>
          <Text style={styles.data}>{date}</Text>
          <Text style={styles.data}>{hour}</Text>
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
        <Text style={styles.result}>{route.params.data}</Text>
        <TouchableOpacity style={styles.code}>
          <MaterialIcons name="save" size={60} style={styles.menu} />
          <Text style={styles.info}>Zapisz kod</Text>
        </TouchableOpacity>
        {route.params.data &&
        (route.params.data.includes("://") || route.params.id === 256) ? (
          <TouchableOpacity
            onPress={() => Linking.openURL(route.params.data)}
            style={styles.code}
          >
            <Entypo name="link" size={60} style={styles.menu} />
            <Text style={styles.info}>Otwórz URL</Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
        <View style={{ marginBottom: 25 }}></View>
      </View>
    </ImageBackground>
  );
}
