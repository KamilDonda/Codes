import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Barcode from "react-native-barcode-builder";

export default function Result({ route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    address: {
      marginTop: 20,
      alignItems: "center",
    },
    button: {
      width: 300,
      backgroundColor: "#788eec",
      marginTop: 50,
      height: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const [currentDate, setCurrentDate] = React.useState("");

  React.useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <View style={styles.container}>
      {route.params.data &&
      (route.params.data.includes("://") || route.params.id === 256) ? (
        <QRCode
          value={route.params.data}
          size={200}
          bgColor="#000000"
          fgColor="#FFFFFF"
        />
      ) : (
        <Barcode value={route.params.data} format="CODE128" />
      )}
      <View style={styles.address}>
        <Text>{route.params.id}</Text>
        <Text>{route.params.data}</Text>
      </View>
      <View style={styles.address}>
        <Text>{currentDate}</Text>
      </View>
      {route.params.data &&
      (route.params.data.includes("://") || route.params.id === 256) ? (
        <TouchableOpacity
          onPress={() => Linking.openURL(route.params.data)}
          style={styles.button}
        >
          <Text>Otwórz URL</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
