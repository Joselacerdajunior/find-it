import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    // KeyboardAvoidingView will push the content when opening the keyboard
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <TouchableOpacity style={styles.buttonLogin} onPress={signIn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        containerStyle={styles.buttonRegister}
        onPress={() => navigation.navigate("Register")}
        title="Register"
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  buttonLogin: {
    backgroundColor: "#9b34eb",
    width: 200,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 5,
  },
  buttonRegister: {
    backgroundColor: "#9b34eb",
    color: "#fff",
    width: 200,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 20,
  },
});
