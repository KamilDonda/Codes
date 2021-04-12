import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Scanning from "./screens/Scanning";
import Generating from "./screens/Generating";
import { DrawerContent } from "./DrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
  },
  bulb: {
    marginRight: 10,
  },
});

export default function MainTabScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Scan" component={StackScanning} />
        <Drawer.Screen name="Generate" component={StackGenerating} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const StackScanning = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Scanning}
      options={{
        title: "Skanowanie",
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={40}
            onPress={() => navigation.openDrawer()}
            style={styles.menu}
          />
        ),
        headerRight: () => (
          <MaterialIcons name="lightbulb" size={40} style={styles.bulb} />
        ),
      }}
    />
  </Stack.Navigator>
);

const StackGenerating = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Generowanie kodu"
      component={Generating}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={40}
            onPress={() => navigation.openDrawer()}
            style={styles.menu}
          />
        ),
        headerRight: () => (
          <MaterialIcons name="lightbulb" size={40} style={styles.bulb} />
        ),
      }}
    />
  </Stack.Navigator>
);
