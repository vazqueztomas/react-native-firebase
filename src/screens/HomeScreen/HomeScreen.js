import { View, Text } from "react-native";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
