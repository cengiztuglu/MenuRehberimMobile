import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const EditRestaurantScreen = () => {
  const [username, setUsername] = useState('');
  const [restourantName, setRestName] = useState('');
  const [placeDefinition, setRestDesc] = useState('');
  const [placeAdress, setRestAddress] = useState('');
  const [category, setRestCategory] = useState('');
  const [placeBgPicName, setRestPhoto] = useState(null);
  const navigation = useNavigation();

  


  useEffect(() => {
    getUsernameFromStorage();
    getPermissionAsync();
  }, []);

  const getUsernameFromStorage = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };

  const getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Galeri erişimi reddedildi!');
      }
    }
  };

  const handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaType: 'photo',
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: false,
      });
  
     
  
      if (!result.cancelled) {
        setRestPhoto(result.assets[0].uri);
      } else {
        console.log('Resim seçilmedi veya bir hata oluştu.');
      }
    } catch (error) {
      console.error('ImagePicker error:', error);
    }
  };
  
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('restourantName', restourantName);
      formData.append('placeDefinition', placeDefinition);
      formData.append('placeAdress', placeAdress);
      formData.append('category', category);
  
      const localUri = placeBgPicName;
      const filename = localUri.split('/').pop();
      const type = 'image/jpeg';
  
      formData.append('file', { uri: localUri, name: filename, type });
  
      const response = await fetch(`http://192.168.1.104:8080/api/placeAdd/${username}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
        navigation.navigate('Menunuzu Duzenleyin'); // Burada sayfaya yönlendirme yapılıyor

      } else {
        console.error('API request failed.');
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: placeBgPicName }} style={{ width: 200, height: 200 }} />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={handleChoosePhoto}>
          <Text style={styles.changeAvatarButtonText}>Fotoğrafı Değiştir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Restoran Adı :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Adı"
          value={restourantName}
          onChangeText={setRestName}
        />
        <Text style={styles.label}>Restoran Açıklaması :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Açıklaması"
          value={placeDefinition}
          onChangeText={setRestDesc}
        />
        <Text style={styles.label}>Restoran Adresi :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Adresi"
          value={placeAdress}
          onChangeText={setRestAddress}
        />
        <Text style={styles.label}>Restoran Kategorisi</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Kategorisi"
          value={category}
          onChangeText={setRestCategory}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    fontSize: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#c10e18',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  changeAvatarButton: {
    marginTop: 10,
    color: '#c10e18',
  },
  changeAvatarButtonText: {
    color: '#c10e18',
    fontSize: 18,
  },
});

export default EditRestaurantScreen;
