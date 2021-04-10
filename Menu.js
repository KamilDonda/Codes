import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    main: {
      width: "100%",
      height: 50,
      backgroundColor: "silver",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const hamburgerClick = React.useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={hamburgerClick}>
        {/* <Image
                    style={}
                    source={}
                    /> */}
      </TouchableOpacity>
      <Text>Home</Text>
      <View>
        {/* <Image
                    style={}
                    source={} //zarowka
                /> */}
      </View>
    </View>
  );
}
