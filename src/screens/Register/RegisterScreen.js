import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios'; // Axios kütüphanesini ekliyoruz
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationType, setRegistrationType] = useState("restaurant");

  const handleRegister = () => {
    const userData = { name, surName, userName, email, password };
    const restaurantEndpoint = 'http://192.168.70.91:8080/api/restourantAdd';
    const userEndpoint = 'http://192.168.70.91:8080/api/user';

    let endpoint = '';
    if (registrationType === 'restaurant') {
      endpoint = restaurantEndpoint;
    } else if (registrationType === 'user') {
      endpoint = userEndpoint;
    } else {
      console.error('Geçersiz kayıt türü!');
      return;
    }

    axios.post(endpoint, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (registrationType === 'restaurant') {
          Alert.alert(
            'Başarılı!',
            'Restoran kaydı başarıyla oluşturuldu.Giriş sayfasına yönlendiriliyorsunuz.',
            [
              { text: 'Tamam', onPress: () => navigation.navigate('Giriş Yap')},
            ]
          );
        } else if (registrationType === 'user') {
          Alert.alert(
            'Başarılı!',
            'Kullanıcı kaydı başarıyla oluşturuldu. Giriş sayfasına yönlendiriliyorsunuz.',
            [
              { text: 'Tamam', onPress: () => navigation.navigate('Giriş Yap') },
            ]
          );
        }
      })
      .catch((error) => {
        console.error('Hata oluştu:', error);
        Alert.alert(
          'Hata!',
          'Bir hata oluştu, lütfen tekrar deneyin.',
          [
            { text: 'Tamam' },
          ]
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headText, styles.redText]}>Menu Rehberim'e</Text>
      <Text style={[styles.headText]}>Kayıt Ol</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ad"
          placeholderTextColor="#fff"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Soyad"
          placeholderTextColor="#fff"
          onChangeText={(surname) => setSurname(surname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#fff"
          onChangeText={(username) => setUsername(username)}
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
          placeholder="Şifre"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.selectionView}>
        <TouchableOpacity
          style={registrationType === 'restaurant' ? styles.selectedButton : styles.button}
          onPress={() => setRegistrationType('restaurant')}
        >
          <Text style={styles.buttonText}>Restoran</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={registrationType === 'user' ? styles.selectedButton : styles.button}
          onPress={() => setRegistrationType('user')}
        >
          <Text style={styles.buttonText}>Kullanıcı</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
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
  selectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c10e18',
    borderRadius: 20,
    padding: 10,
  },
  selectedButton: {
    backgroundColor: '#c10e18',
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  headText: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 40,
  },
  redText: {
    color: '#c10e18',
  },
  TextInput: {
    color: '#fff',
    height: 50,
    fontSize: 20,
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
    color: '#fff',
    backgroundColor: "#c10e18",
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
