import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EditRestaurantScreen = () => {
  const profile = {
    restName: '',
    restDesc: '',
    restAddress: '',
    restCategory: '',
    avatar: 'https://example.com/jane-doe-avatar.png',
  }
  const [restName, setrestName] = useState(profile.restName);
  const [restDesc, setrestDesc] = useState(profile.restDesc);
  const [restAddress, setrestAddress] = useState(profile.restAddress);
  const [restCategory, setrestCategory] = useState(profile.restCategory);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleSubmit = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar3.png'}}
        />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */}}>
          <Text style={styles.changeAvatarButtonText}>Fotoğrafı Değiştir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Restoran Adı :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Adı"
          value={restName}
          onChangeText={setrestName}
        />
        <Text style={styles.label}>Restoran Açıklaması :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Açıklaması"
          value={restDesc}
          onChangeText={setrestDesc}
        />
        <Text style={styles.label}>Restoran Adresi :</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Adresi"
          value={restAddress}
          onChangeText={setrestAddress}
        />
        <Text style={styles.label}>Restoran Kategorisi</Text>
        <TextInput
          style={styles.input}
          placeholder="Restoran Kategorisi"
          value={restCategory}
          onChangeText={setrestCategory}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({restName, restDesc, restAddress, restCategory})}>
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

export default EditRestaurantScreen;
