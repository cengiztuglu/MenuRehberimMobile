import React, { useLayoutEffect,useEffect, useState } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function MenuItemsScreen({route}) {

 
  const { id } = route.params;
  const [menus, setMenus] = useState([]);



  useLayoutEffect(() => {
    fetch(`http://192.168.1.104:8080/api/getMenuItemsById/${id}`)
    .then(response => response.json())
    .then(data => {
      // Burada gelen verileri kullanabilirsiniz, örneğin:
      setMenus(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [id]);


  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: `data:image/jpeg;base64,${item.itemPicName}` }} />

        <Text style={styles.title}>{item.itemName}</Text>
        <Text style={styles.category}>{item.itemDefinition}</Text>
        <Text style={styles.price}>{item.itemPrice} TL</Text>

        
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={menus} renderItem={renderRecipes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}
