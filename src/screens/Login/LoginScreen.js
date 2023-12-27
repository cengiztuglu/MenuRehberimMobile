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

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/MenuRehberimLogo.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Kullanıcı Adı/Restoran Adı"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Şifre"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.registerText}>Hesabınız yok mu ? Şimdi kayıt olun.</Text> 
      </TouchableOpacity> 
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
    backgroundColor: "#A6A1A1",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color:'#fff',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  registerText: {
    height: 30,
    marginBottom: 30,
    fontSize:15,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    color:'#fff',
    backgroundColor: "#c10e18",
  },
  loginText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize: 20,
  }, 
});