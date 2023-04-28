import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const HistorialScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Este es tu historial de partidos</Text>
      </View>
    </SafeAreaView>
  );
};

export default HistorialScreen;
