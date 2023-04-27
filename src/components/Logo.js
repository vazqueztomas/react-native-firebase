import { Image, StyleSheet } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <Image
      source={require("../../assets/icon.png")}
      resizeMode="contain"
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
  },
});

export default Logo;
