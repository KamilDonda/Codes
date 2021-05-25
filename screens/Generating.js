import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Generating({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    barcode: {
      margin: 10,
      alignItems: "center",
    },
    qrcode: {
      margin: 10,
      alignItems: "center",
    },
    info: {
      fontSize: 32,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.barcode}
        onPress={() => navigation.navigate("Barcode Generator")}
      >
        <Text style={styles.info}>Barcode</Text>
        <AntDesign name="barcode" size={120} style={styles.menu} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.qrcode}
        onPress={() => navigation.navigate("QRcode Generator")}
      >
        <Text style={styles.info}>QRCode</Text>
        <MaterialCommunityIcons name="qrcode" size={120} style={styles.menu} />
      </TouchableOpacity>
    </View>
  );
}
