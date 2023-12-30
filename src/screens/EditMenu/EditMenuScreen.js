import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EditRestaurantScreen = () => {
  const profile = {
    itemName: '',
    itemDesc: '',
    itemPrice: '',
    itemCategory: '',
    itemPhoto: 'https://example.com/jane-doe-avatar.png',
  }
  const [itemName, setitemName] = useState(profile.itemName);
  const [itemDesc, setitemDesc] = useState(profile.itemDesc);
  const [itemPrice, setitemPrice] = useState(profile.itemPrice);
  const [itemCategory, setitemCategory] = useState(profile.itemCategory);
  const [itemPhoto, setitemPhoto] = useState(profile.itemPhoto);

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
          value={itemDesc}
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
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit({itemName, itemDesc, itemPrice, itemCategory})}>
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
