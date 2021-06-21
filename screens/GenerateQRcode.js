import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import bg from "../assets/background.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function GenerateQRcode() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    day: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    data: {
      fontSize: 18,
      color: "#1D1D1D",
      fontWeight: "bold",
    },
    input: {
      width: "90%",
      borderRadius: 10,
      height: 50,
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: "center",
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
    },
    menu: {
      margin: 10,
    },
    info: {
      fontSize: 24,
      fontWeight: "bold",
      margin: 10,
      color: "#F8F2F2",
    },
  });

  const [text, onChangeText] = React.useState("");
  const [date, SetDate] = React.useState("");
  const [hour, SetHour] = React.useState("");
  const [name, setNames] = React.useState([]);

  React.useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;

    SetDate(date + "/" + month + "/" + year);
    SetHour(hours + ":" + min);
  }, [text]);

  loadHistory = async () => {
    try{
      if(state.names.length == 0){
        if(JSON.parse(await AsyncStorage.getItem('history')) != 0)
          state.names = JSON.parse(await AsyncStorage.getItem('history'));
      }
    }catch(error){
      alert(error);
    }
    saveCode()
  }


  saveCode = () =>{
    let index;
    if(state.names.length == 0)
      index = 0;
    else 
      index = state.names[state.names.length - 1].id + 1;

    let data = {
       id: index,
       name: text,
       type: "QrCode"
   };

   const exists = state.names.some(v => (v.name === data.name && v.type === data.type));
   if(!exists){
    state.names.push(data);
    AsyncStorage.setItem('history',JSON.stringify(state.names));
    console.warn('Dodano kod');
   }
 }

  return (
    <ImageBackground source={bg} style={{ flex: 1 }} resizeMode="stretch">
      <View style={styles.container}>
        <View style={styles.day}>
          <Text style={styles.data}>{date}</Text>
          <Text style={styles.data}>{hour}</Text>
        </View>
        {text ? (
          <QRCode value={text} size={150} fgColor="#FFFFFF" />
        ) : (
          <Text></Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Wprowadź adres"
        />
        <TouchableOpacity style={styles.code}>
          <MaterialIcons name="save" size={70} style={styles.menu} />
          <Text style={styles.info} onPress={saveCode}>Zapisz kod</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
