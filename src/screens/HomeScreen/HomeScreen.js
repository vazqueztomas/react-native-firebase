import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";

const HomeScreen = () => {
  const teams = ["Boca Juniors", "River Plate", "San Lorenzo", "Racing Club"];
  const auth = getAuth();
  const navigation = useNavigation("");
  const [userLogged, setUserLogged] = useState(false);
  const [userActual, setUserActual] = useState("");
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      setUserLogged(true);
      setUserActual(user);
    } else {
      navigation.navigate("Login");
    }
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Hola de nuevo! {userActual.email}</Text>
        {/* <Logo /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default HomeScreen;
