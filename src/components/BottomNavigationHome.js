import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import HistorialScreen from "../screens/HistorialScreen/HistorialScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationHome = () => {
  const [user, setUser] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user);
    }
  });
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        user={user}
        options={{
          tabBarIcon: "home",
          tabBarLabel: "Feed",
        }}
      />
      <Tab.Screen
        name="Historial"
        component={HistorialScreen}
        options={{ tabBarIcon: "list-status" }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationHome;
