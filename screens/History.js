import React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import Barcode from "react-native-barcode-builder";
import QRCode from "react-native-qrcode-svg";


state = {
  index: -1,
  names: [

  ],
}


export default function History() {

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
    console.warn('Usunięto element')

 }


  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center'
    },
    row: {
      padding: 10,
      marginTop: 2,
      marginBottom: 1,
      backgroundColor: '#4dc3ff',
      alignItems: 'center',
   },
    headerRow: {
      padding: 10,
      marginTop: 3,
      fontSize: 20,
      backgroundColor: '#4dc3ff',
      textAlign: 'center',
   },
    qrCode:{
      alignSelf:'center',
      margin:2,
   },
    text: {
      color: '#4f603c'
   },
  });

    const [textValue, setTextValue] = React.useState("");
    const [bcValue, setBcValue] = React.useState("");
    const [qrValue, setQrValue] = React.useState("");
    const [name, setNames] = React.useState([]);

  return (
    <View  style = {styles.container}>
        <Text style = {styles.headerRow}>{textValue}</Text>
        {bcValue ? <Barcode value={bcValue} format="CODE128" /> : <Text></Text>}
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
         
      { <Button title="Odśwież"  onPress={setNames} style = {styles.btn} /> }
      </ScrollView>
    </View>
  );
}