import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function Menu() {
  const styles = StyleSheet.create({
    main: {
      width: "100%",
      height: 100,
      backgroundColor: "silver",
    },
    menu: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 50,
    },
    iconMenu: {
      marginLeft: 10,
    },
    iconBulb: {
      marginRight: 10,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={50} style={styles.iconMenu} />
        </TouchableOpacity>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity>
          <MaterialIcons name="lightbulb" size={50} style={styles.iconBulb} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
