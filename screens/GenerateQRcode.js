import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function GenerateQRcode() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: "90%",
      borderWidth: 2,
      borderRadius: 10,
      height: 50,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    info: {
      marginTop: 10,
      fontSize: 18,
    },
  });

  const [text, onChangeText] = React.useState("");
  const [name, setNames] = React.useState([]);

  saveCode = () =>{
    const v = text

    state.index = state.index + 1
    let data = {
       id: state.index,
       name: v,
       type: "QrCode"
   };  
   const exists = state.names.some(v => (v.name === data.name && v.type === data.type));

   if(!exists){
    state.names.push(data);
    setNames(state.names);
   }

 }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {text ? (
        <QRCode value={text} size={200} bgColor="#000000" fgColor="#FFFFFF" />
      ) : (
        <Text></Text>
        
      )}
      <Text style={styles.info}>{text}</Text>
      <Button title="Zapisz kod QR"  onPress={saveCode}  />
    </View>
  );
}
