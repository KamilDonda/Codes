import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MenuElements() {
  const styles = StyleSheet.create({
      main: {
          height: 350,
          backgroundColor: 'grey',
          justifyContent: "space-between",
          flexDirection: "column",
      },
      list: {
        flexDirection: "row",
        alignItems: "center",
        margin: 2,
      },    
      icon: {
        marginLeft: 5,
      },    
      element: {
          marginLeft: 22,
      }
  });


  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <View style={styles.list}>
          <AntDesign name="camera" size={50} style={styles.icon}/>
          <Text style={styles.element}>Skanowanie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.list}>
          <AntDesign name="barcode" size={50} style={styles.icon}/>
          <Text style={styles.element}>Generowanie kodu</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.list}>
          <Ionicons name="images-outline" size={50} style={styles.icon}/>
          <Text style={styles.element}>Galeria</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.list}>
          <MaterialIcons name="history" size={50} style={styles.icon}/>
          <Text style={styles.element}>Historia</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.list}>
          <AntDesign name="idcard" size={50} style={styles.icon}/>
          <Text style={styles.element}>Autorzy</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
