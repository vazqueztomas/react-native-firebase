import { View, Text } from "react-native";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const auth = getAuth();
  const navigation = useNavigation("");
  const [userLogged, setUserLogged] = useState(false);
  const [userActual, setUserActual] = useState("");
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUserLogged(true);
      setUserActual(user);
      // ...
    } else {
      // User is signed out
      // ...
      navigation.navigate("Login");
    }
  });
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{userActual.email}</Text>
    </View>
  );
};

export default HomeScreen;
