import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



const EditMenuScreen = () => {
  

  const profile = {
    itemName: '',
    itemDefinition: '',
    itemPrice: '',
    itemCategory: '',
    itemPhoto: 'https://example.com/jane-doe-avatar.png',
  }
  const [itemName, setitemName] = useState('');
  const [itemDefinition, setitemDesc] = useState('');
  const [itemPrice, setitemPrice] = useState('');
  const [itemCategory, setitemCategory] = useState('');
  const [itemPhoto, setitemPhoto] = useState(null);
  const [username, setUsername] = useState('');

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
  
      console.log('ImagePicker result:', result);
  
      if (!result.cancelled) {
        setitemPhoto(result.assets[0].uri); // Resmin URI'sini alıp state'e ata
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
      formData.append('itemName', itemName);
      formData.append('itemDefinition',itemDefinition);
      formData.append('itemPrice', itemPrice);
      formData.append('itemCategory', itemCategory);
  
      const localUri = itemPhoto;
      const filename = localUri.split('/').pop();
      const type = 'image/jpeg'; // Resim tipini doğrudan belirle
  
      formData.append('file', { uri: localUri, name: filename, type });
  
      const response = await fetch(`http://192.168.75.91:8080/api/menuItemsAdd/${username}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
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
      <Image source={{ uri: itemPhoto }} style={{ width: 200, height: 200 }} />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={handleChoosePhoto}>
          <Text style={styles.changeAvatarButtonText}>Fotoğrafı Değiştir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Urun Adı :</Text>
        <TextInput
          style={styles.input}
          placeholder="Urun Adı"
          value={itemName}
          onChangeText={setitemName}
        />
        <Text style={styles.label}>Urun Açıklaması :</Text>
        <TextInput
          style={styles.input}
          placeholder="Urun Açıklaması"
          value={itemDefinition}
          onChangeText={setitemDesc}
        />
        <Text style={styles.label}>Urun Fiyatı :</Text>
        <TextInput
          style={styles.input}
          placeholder="Urun Fiyatı"
          value={itemPrice}
          onChangeText={setitemPrice}
        />
        <Text style={styles.label}>Urun Kategorisi</Text>
        <TextInput
          style={styles.input}
          placeholder="Urun Kategorisi"
          value={itemCategory}
          onChangeText={setitemCategory}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({itemName, itemDefinition, itemPrice, itemCategory})}>
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
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignItems:'center',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 300,
    height: 200,
    borderRadius: 50,
    borderColor: '#c10e18',
    borderWidth:3,
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

export default EditMenuScreen;
