import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HistorialScreen = () => {
  const [usuario, setUsuario] = useState("");
  const auth = getAuth();
  const [partidos, setPartidos] = useState([]);
  onAuthStateChanged(auth, user => {
    if (user) {
      setUsuario(user);
    } else {
      return;
    }
  });

  useEffect(() => {
    if (usuario !== "") {
      getUserInRealTime();
    }
  }, []);
  const docRef = doc(db, "usuarios", usuario.uid);
  const getUserInRealTime = onSnapshot(docRef, snap => {
    setPartidos(snap.data().partidos);
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Este es tu historial de partidos</Text>
        {partidos.map(el => (
          <View>
            <Text>{el}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HistorialScreen;
