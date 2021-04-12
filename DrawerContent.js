import React from "react";
import { StyleSheet, Switch, View, Text } from "react-native";
import { Drawer, TouchableRipple } from "react-native-paper";
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
  });

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.main}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => <AntDesign name="camera" size={50} />}
            label="Skanowanie"
            onPress={() => {
              props.navigation.navigate("Scan");
            }}
          />
          <DrawerItem
            icon={() => <AntDesign name="barcode" size={50} />}
            label="Generowanie kodu"
            onPress={() => {
              props.navigation.navigate("Generate");
            }}
          />
          <DrawerItem
            icon={() => <Ionicons name="images-outline" size={50} />}
            label="Galeria"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={() => <MaterialIcons name="history" size={50} />}
            label="Historia"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={() => <AntDesign name="idcard" size={50} />}
            label="Autorzy"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
