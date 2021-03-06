import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ImageBackground, useColorScheme } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import bg from "../assets/background.png";

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  layerTop: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 0.5,
    backgroundColor: opacity,
  },
  lightThemeBackground: {
    backgroundColor: "#FFFFFF",
  },
  darkThemeBackround: {
    backgroundColor: "#1D1D1D",
  },
});

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const colorScheme = useColorScheme();
  const themeBackgroundStyle = colorScheme === 'light' ? styles.lightThemeBackground : styles.darkThemeBackround

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
    <ImageBackground source={bg} style={[{ flex: 1 }, themeBackgroundStyle]} resizeMode="stretch">
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        >
          <View style={styles.layerTop} />
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom} />
        </BarCodeScanner>
        {scanned && (
          <Button
            title={"Naciśnij, aby zeskanować ponownie"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </ImageBackground>
  );
}
