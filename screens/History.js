import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, ScrollView, AsyncStorage, useColorScheme } from "react-native";

import Barcode from "react-native-barcode-builder";
import QRCode from "react-native-qrcode-svg";
import bg from "../assets/background.png";
import darkbg from "../assets/darkBackground.png";

state = {
  index: -1,
  names: [

  ],
}

export default function History() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      flexDirection: "row",
      height: 50,
      width: 200,
      borderRadius: 20,
      margin: 10,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: 'center',
    },
    info: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
      color: "#F8F2F2",
    },
    row: {
      padding: 10,
      marginTop: 2,
      marginBottom: 1,
      backgroundColor: '#1B87E5',
      alignItems: 'center',
      borderRadius: 30,
   },
    headerRow: {
      fontSize: 20,
      textAlign: 'center',
   },
    scroll: {
      width: '90%',
      height: '36.5%',
      marginTop: 14,
    },
    codes: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20%',
    },
    item: {
      fontWeight: 'bold',
    },
    lightThemeText: {
      color: "#1D1D1D",
    },
    darkThemeText: {
      color: "#F8F2F2",
    },
    lightThemeBackground: {
      backgroundColor: "#FFFFFF",
    },
    darkThemeBackround: {
      backgroundColor: "#1D1D1D",
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

  const colorScheme = useColorScheme();
  const themeBackgroundStyle =
    colorScheme === "light"
      ? styles.lightThemeBackground
      : styles.darkThemeBackround;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeButtonStyle =
    colorScheme === "light" ? styles.lightThemeButton : styles.darkThemeButton;

  return (
    <ImageBackground source={colorScheme === "light" ? bg : darkbg} style={[{ flex: 1 }, themeBackgroundStyle]} resizeMode="stretch">
      <View style={styles.container}>
        <View style={styles.codes}>
          {qrValue ? (<QRCode value={qrValue} size={120}/>) : (<Text></Text>)}
          {bcValue ? <Barcode value={bcValue} format="CODE128" /> : (<Text></Text>)}
        </View>
        <Text style = {[styles.headerRow, themeTextStyle]}>{textValue}</Text>
        <View style={{alignItems: 'center'}}>
          <ScrollView style={styles.scroll}>
            {
              state.names.map((item, index) => (
                <TouchableOpacity
                  key = {item.id}
                  style = {styles.row}
                  onPress = {() => showCode(item)}
                  onLongPress = {() => deleteRow(item)}>
                    <Text style={[styles.item, themeTextStyle]}>
                      {item.name}{" - "}{item.type}
                    </Text>
                  </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <View style={{alignItems: 'center', marginTop: '16%'}}>
          <TouchableOpacity style={styles.button} onPress={setNames}>
            <Text style={styles.info}>Odśwież</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}