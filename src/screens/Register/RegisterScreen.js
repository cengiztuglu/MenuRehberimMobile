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
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={[styles.headText,styles.redText]}>Menu Rehberim'e</Text>
      <Text style={[styles.headText]}>Kayıt Ol</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ad"
          placeholderTextColor="#fff"
          onChangeText={(email) => setName(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Soyad"
          placeholderTextColor="#fff"
          onChangeText={(email) => setSurname(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#fff"
          onChangeText={(email) => setUsername(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Sifre"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Kayıt Ol</Text> 
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
  inputView: {
    backgroundColor: "#342f29",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  headText: {
    fontWeight:'bold',
    marginBottom: 10,
    fontSize:40,
  },
  redText: {
    color: '#c10e18',
  },
  TextInput: {
    color:'#fff',
    height: 50,
    fontSize:20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
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