import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


const RestaurantScreen = () => {
  const navigation = useNavigation();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.104:8080/api/getPlace')
      .then(response => response.json())
      .then(data => {
        // Burada gelen verileri kullanabilirsiniz, örneğin:
        setRestaurants(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Restoran verilerini FlatList içinde kullanarak göstermek için bir renderItem fonksiyonu tanımlayabilirsiniz
  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
    style={styles.categoriesItemContainer}
    onPress={() => navigateToRestaurantDetail(item.id)}
  >
    <Text style={styles.categoriesName}>{item.restourantName}</Text>
    <Image source={{ uri: `data:image/jpeg;base64,${item.placeBgPicName}` }} style={styles.categoriesPhoto} />
    <Text style={styles.placeDefinition}>{item.placeDefinition}</Text>
  </TouchableOpacity>
);

  const navigateToRestaurantDetail = (id) => {
    navigation.navigate('Menu', { id });
  };

  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

export default RestaurantScreen;
