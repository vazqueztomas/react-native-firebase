import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import HistorialScreen from "../screens/HistorialScreen/HistorialScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationHome = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
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
