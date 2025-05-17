import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App = () => {
  return (
    <>
      <RootStack />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    height: "100%",
  },
});
