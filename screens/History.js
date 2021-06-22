import React from "react";
import { StyleSheet, Button, View, Text, ImageBackground, TouchableOpacity, Alert, ScrollView, AsyncStorage } from "react-native";

import Barcode from "react-native-barcode-builder";
import QRCode from "react-native-qrcode-svg";
import bg from "../assets/background.png";

state = {
  index: -1,
  names: [

  ],
}

export default function History() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    code: {
      flexDirection: "row",
      height: 80,
      width: 300,
      borderRadius: 20,
      margin: 10,
      backgroundColor: "#1B87E5",
      alignItems: "center",
      marginBottom: 40,
      justifyContent: 'center',
    },
    info: {
      fontSize: 24,
      fontWeight: "bold",
      margin: 10,
      color: "#F8F2F2",
    },

    row: {
      padding: 10,
      marginTop: 2,
      marginBottom: 1,
      backgroundColor: '#4dc3ff',
      alignItems: 'center',
      borderRadius: 30,
   },
    headerRow: {
      padding: 10,
      marginTop: 80,
      fontSize: 20,
      textAlign: 'center',
   },
    qrCode:{
      alignSelf:'center',
      margin:5,

   },
    text: {
      color: '#4f603c'
   },
  });

  showCode = (item) => {
    setTextValue(item.name);

    if(item.type == 'Barcode'){
      setBcValue(item.name);
      setQrValue("");
    }
    if(item.type == 'QrCode'){
      setBcValue("");
      setQrValue(item.name);
    }
 }

 deleteRow = (item) => {
  Alert.alert(
     'Usuwanie elementu',
     'Czy chcesz usunąć dany element?',
     [
       {text: 'NIE', onPress: () => console.warn('Element pozostawiono'), style: 'cancel'},
       {text: 'TAK', onPress: () => usuwanie(item)},
     ]
   );
}

usuwanie = (item) => {
  var arr = state.names
  var pos = arr.indexOf(item)
  arr.splice(pos,1)
  setNames(arr)
  AsyncStorage.setItem('history',JSON.stringify(state.names));
  console.warn('Usunięto element')
}


loadHistory = async () => {
  try{
    if(state.names.length == 0){
      if(JSON.parse(await AsyncStorage.getItem('history')) != 0){
        state.names = JSON.parse(await AsyncStorage.getItem('history'));
         setNames(state.names);
      }
    }
  }catch(error){
    alert(error);
  }
}

const [textValue, setTextValue] = React.useState("");
const [bcValue, setBcValue] = React.useState("");
const [qrValue, setQrValue] = React.useState("");
const [name, setNames] = React.useState([]);

React.useEffect(() => {
  loadHistory();
}, []);

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View>
      <Text style = {styles.headerRow}>{textValue}</Text>
        {bcValue ? <Barcode style = {styles.qrCode} value={bcValue} format="CODE128" /> : <Text></Text>}
        <Text style = {styles.qrCode}>{qrValue ? (<QRCode value={qrValue}  style = {styles.qrCode}/>) : (<Text></Text>)}</Text>
        <ScrollView>
            {
               state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.row}
                     onPress = {() => showCode(item)}
                     onLongPress = {() => deleteRow(item)}>
                     <Text style = {styles.text}>
                        {item.name}{" - "}{item.type}
                     </Text>
                  </TouchableOpacity>
               ))
            }
      </ScrollView>

      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.code}>
          <Text style={styles.info} onPress={setNames}>Odśwież</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}