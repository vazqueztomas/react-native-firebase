import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Button } from "native-base";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const HomeScreen = ({ user }) => {
  const teams = ["Boca Juniors", "River Plate", "San Lorenzo", "Racing Club"];
  const auth = getAuth();
  const navigation = useNavigation("");
  const [userActual, setUserActual] = useState("");
  const [partido, setPartido] = useState("");

  console.log(user);

  const chargeNewPartido = () => {
    const uid = userActual.uid;

    let route = doc(db, "usuarios", uid);
    updateDoc(route, {
      partidos: arrayUnion(partido),
    });
  };

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
      <TextInput
        onChangeText={text => {
          setPartido(text);
        }}
        value={partido}
        placeholder="Ingresa el partido"
        style={styles.input}
      />
      <Button onPress={chargeNewPartido}>
        <Text>Cargar</Text>
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
