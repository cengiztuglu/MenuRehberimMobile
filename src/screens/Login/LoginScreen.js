import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import axios from "axios"; 

import RegisterButton from "../../components/RegisterButton/RegisterButton";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function LoginScreen(props) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRestaurantLogin, setIsRestaurantLogin] = useState(false);
  const { navigation } = props;

  const onPressRegister = () => {
    navigation.navigate("Kayıt Ol");
  };

  const handleLogin = () => {
    const API_URL = isRestaurantLogin
      ? "http://192.168.173.91:8080/api/rlogin"
      : "http://192.168.173.91:8080/api/login";

   
    axios
      .post(API_URL, {
        userName,
        password,
      })
      .then(async (response) => {
        console.log("Başarılı giriş:", response.data);

      // Oturum bilgilerini saklama
      try {
        await AsyncStorage.setItem('username', userName);
        navigation.navigate('Restoranınızı Tanımlayın');
      } catch (error) {
        console.error("AsyncStorage hatası:", error);
      }
    })
    .catch((error) => {
      // Hata durumu
      console.error("Giriş hatası:", error);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/MenuRehberimLogo.png")}
      />
      <StatusBar style="auto" />
      <Text style={styles.headText}>Giriş Yap</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Kullanıcı Adı/Restoran Adı"
          placeholderTextColor="#fff"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Şifre"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Restoran Girişi</Text>
        <Switch
          style={styles.checkbox}
          value={isRestaurantLogin}
          onValueChange={(value) => setIsRestaurantLogin(value)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRegister}>
        <Text style={styles.registerText}>
          Hesabınız yok mu? Şimdi kayıt olun.
        </Text>
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
    color: "#fff",
    fontSize: 14,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    color: "#333",
    marginRight: 10,
  },
  checkbox: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  registerText: {
    height: 30,
    marginBottom: 10,
    fontSize: 15,
  },
  headText: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 40,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 40,
    color: "#fff",
    backgroundColor: "#c10e18",
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
