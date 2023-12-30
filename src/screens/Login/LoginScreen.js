import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import RegisterButton from "../../components/RegisterButton/RegisterButton";

export default function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { navigation } = props;
  const onPressRegister = () => {
    navigation.navigate("Kayıt Ol");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/MenuRehberimLogo.png")} /> 
      <StatusBar style="auto" />
      <Text style={[styles.headText]}>Giriş Yap</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Kullanıcı Adı/Restoran Adı"
          placeholderTextColor="#fff"
          onChangeText={(username) => setUsername(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Şifre"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.container}>
          <RegisterButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Giriş Yap</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#342f29",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color:'#fff',
    fontSize:14,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  registerText: {
    height: 30,
    marginBottom: 10,
    fontSize:15,
  },
  headText: {
    fontWeight:'bold',
    marginBottom: 10,
    fontSize:40,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 40,
    color:'#fff',
    backgroundColor: "#c10e18",
  },
  loginText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize: 20,
  }, 
});