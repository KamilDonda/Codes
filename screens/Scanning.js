import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //alert(`Typ kodu: ${type}\nKod: ${data}`);
    navigation.navigate("Result", { id: type, data: data });
  };

  if (hasPermission === null) {
    return <Text>Wymagany dostep do kamery</Text>;
  }
  if (hasPermission === false) {
    return <Text>Brak dostępu do aparatu</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
      {scanned && (
        <Button
          title={"Naciśnij, aby zeskanować ponownie"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}
