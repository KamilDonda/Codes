import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Scanning from "./screens/Scanning";
import Generating from "./screens/Generating";
import Result from "./screens/Result";
import GenerateBarcode from "./screens/GenerateBarcode";
import GenerateQRcode from "./screens/GenerateQRcode";
import Gallery from "./screens/Gallery";
import History from "./screens/History";
import Authors from "./screens/Authors";
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
        }}
      />

      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          title: "Wynik",
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
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
        }}
      />
      <Stack.Screen
        name="Barcode Generator"
        component={GenerateBarcode}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
          ),
        }}
      />
      <Stack.Screen
        name="QRcode Generator"
        component={GenerateQRcode}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );

  const StackGallery = ({ navigation }) => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#cc0033",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Galeria"
        component={Gallery}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );

  const StackHistory = ({ navigation }) => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E90FF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Historia"
        component={History}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );

  const StackAuthors = ({ navigation }) => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9900ff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Autorzy"
        component={Authors}
        options={{
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={40}
              onPress={() => navigation.openDrawer()}
              style={styles.menu}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Scan" component={StackScanning} />
        <Drawer.Screen name="Generate" component={StackGenerating} />
        <Drawer.Screen name="Gallery" component={StackGallery} />
        <Drawer.Screen name="History" component={StackHistory} />
        <Drawer.Screen name="Authors" component={StackAuthors} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
