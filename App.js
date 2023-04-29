import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegistrationScreen } from "./src/screens";
import { decode, encode } from "base-64";
import BottomNavigationHome from "./src/components/BottomNavigationHome";
import { NativeBaseProvider } from "native-base";
import theme from "./theme";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

function Home({ user }) {
  return <BottomNavigationHome user={user} />;
}

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home">
            {props => <Home {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
