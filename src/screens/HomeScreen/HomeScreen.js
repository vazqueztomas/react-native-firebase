import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import styles from "./styles";
import AlertaSuccess from "../../components/AlertaSuccess";

const HomeScreen = () => {
  const teams = ["Boca Juniors", "River Plate", "San Lorenzo", "Racing Club"];
  const auth = getAuth();
  const navigation = useNavigation("");
  const [userActual, setUserActual] = useState("");
  onAuthStateChanged(auth, user => {
    if (user) {
      setUserActual(user);
    } else {
      navigation.navigate("Login");
    }
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Hola de nuevo! {userActual.email}</Text>
        <AlertaSuccess />
        {/* <Logo /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
