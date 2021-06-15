import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
export default function Authors () {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    authorsStyle: {
      marginLeft: 16,
      textAlign: 'left',
      color: 'black',
      fontSize: 28,
    },
    bigPurple: {
      alignItems: 'flex-start',
      textAlign: 'right',
      color: 'black',
      fontSize: 24,
      marginRight: 46,
    },
    imageStyle: {
      width: 400, 
      height: 320,
      resizeMode: 'contain',
    },
  },);

  return (

    
    <View style={styles.container}>
      <Text style={styles.authorsStyle}> Organizacje: </Text>
      <Image style={styles.imageStyle} source={require('../assets/authorsAsset.png')}/>
      <Text style={styles.authorsStyle}> Autorzy: </Text>
      <Text style={styles.bigPurple}>• Kamil Donda  </Text>
      <Text style={styles.bigPurple}>• Robert Kwoll  </Text>
      <Text style={styles.bigPurple}>• Daniel Piątek </Text>
      <Text style={styles.bigPurple}>• Robert Olej     </Text>
    </View>
  );
}