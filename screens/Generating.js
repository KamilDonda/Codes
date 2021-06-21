import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import bg from "../assets/background.png";

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
  });

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.code}
          onPress={() => navigation.navigate("Barcode Generator")}
        >
          <AntDesign name="barcode" size={70} style={styles.menu} />
          <Text style={styles.info}>Barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.code}
          onPress={() => navigation.navigate("QRcode Generator")}
        >
          <MaterialCommunityIcons name="qrcode" size={70} style={styles.menu} />
          <Text style={styles.info}>QRcode</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
