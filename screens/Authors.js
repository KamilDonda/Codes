import React from "react";
import { StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import bg from "../assets/background.png";
export default function Authors () {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'flex-start',
      alignItems: "center",
      justifyContent: "center",
    },
    authorsStyle: {
      marginLeft: 16,
      textAlign: 'center',
      color: 'white',
      fontSize: 26,
    },
    names: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
    },
    imageStyle: {
      flex: 1,
      width: '100%', 
      height: '100%',
      resizeMode: 'contain',
    },
  },);

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
    
    <View style={styles.container}>
      <Text style={styles.authorsStyle}> Organizacje: </Text>
      <Image style={styles.imageStyle} source={require('../assets/authorsAsset.png')}/>
      <Text style={styles.authorsStyle}> Autorzy: </Text>
      <Text style={styles.names}>• Kamil Donda • Daniel Piątek</Text>
      <Text style={styles.names}>• Robert Kwoll • Robert Olej </Text>
    </View>

    </ImageBackground>
  );
}