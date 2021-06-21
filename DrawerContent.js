import React from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export function DrawerContent(props) {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    drawerSection: {
      marginTop: 10,
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    lightThemeBackground: {
      backgroundColor: "#FFFFFF",
    },
    darkThemeBackround: {
      backgroundColor: "#1D1D1D",
    },
    lightThemeText: {
      color: "#1D1D1D",
    },
    darkThemeText: {
      color: "#FFFFFF",
    },
  });

  const colorScheme = useColorScheme();
  const themeBackgroundStyle =
    colorScheme === "light"
      ? styles.lightThemeBackground
      : styles.darkThemeBackround;
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  return (
    <View style={[styles.main, themeBackgroundStyle]}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <AntDesign
                name="camera"
                size={50}
                color={colorScheme === "light" ? "#1D1D1D" : "#FFFFFF"}
              />
            )}
            label="Skanowanie"
            labelStyle={themeTextStyle}
            onPress={() => {
              props.navigation.navigate("Scan");
            }}
          />
          <DrawerItem
            icon={() => (
              <AntDesign
                name="barcode"
                size={50}
                color={colorScheme === "light" ? "#1D1D1D" : "#FFFFFF"}
              />
            )}
            label="Generowanie kodu"
            labelStyle={themeTextStyle}
            onPress={() => {
              props.navigation.navigate("Generate");
            }}
          />
          <DrawerItem
            icon={() => (
              <Ionicons
                name="images-outline"
                size={50}
                color={colorScheme === "light" ? "#1D1D1D" : "#FFFFFF"}
              />
            )}
            label="Galeria"
            labelStyle={themeTextStyle}
            onPress={() => {
              props.navigation.navigate("Gallery");
            }}
          />
          <DrawerItem
            icon={() => (
              <MaterialIcons
                name="history"
                size={50}
                color={colorScheme === "light" ? "#1D1D1D" : "#FFFFFF"}
              />
            )}
            label="Historia"
            labelStyle={themeTextStyle}
            onPress={() => {
              props.navigation.navigate("History");
            }}
          />
          <DrawerItem
            icon={() => (
              <AntDesign
                name="idcard"
                size={50}
                color={colorScheme === "light" ? "#1D1D1D" : "#FFFFFF"}
              />
            )}
            label="Autorzy"
            labelStyle={themeTextStyle}
            onPress={() => {
              props.navigation.navigate("Authors");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
