import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const styles = StyleSheet.create({
    main: {
      width: "100%",
      height: 80,
      marginTop: 50,
      backgroundColor: "silver",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: 'row',
    },
    iconMenu: {
      marginLeft: '10px',
    },  
    iconMenu: {
      marginRight: '10px',
    },  
    text: {
    }
  });

  const hamburgerClick = React.useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={hamburgerClick}>
        <MaterialIcons name="menu" size={50} style={styles.iconMenu}/>
      </TouchableOpacity>
      <Text style={styles.text}>Home</Text>
      <View>
        <MaterialIcons name="lightbulb" size={50} style={styles.iconBulb}/>
      </View>
    </View>
  );
}
