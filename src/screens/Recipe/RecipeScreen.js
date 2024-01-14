import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import the necessary functions from React Navigation
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen({ route }) {
  const { id } = route.params;
  const [menus, setMenus] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const slider1Ref = useRef();
  const navigation = useNavigation(); // Initialize navigation

  useLayoutEffect(() => {
    fetch(`http://192.168.1.110:8080/api/ItemPull/${id}`)
      .then(response => response.json())
      .then(data => {
        setMenus(data);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, [id]);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.infoPhoto} source={{ uri: `data:image/jpeg;base64,${item.itemPicName}` }} />

      </View>
      
    </TouchableHighlight>
  );

  const handleButtonClick = () => {
    navigation.navigate('Yorumlar', { itemid: id });
  };

  if (!menus || menus.length === 0) {
    // Veri henüz yükleniyor veya boşsa başa dön
    return (
      <View>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  const item = menus;
  console.log('Item structure:', item);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={menus}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
        
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item ? item.itemName : 'İsim Yok'}</Text>
        <View style={styles.infoContainer}>
        </View>
        <View style={styles.infoContainer}>
          <Image style={styles.infoPhoto} source={{ uri: `data:image/jpeg;base64,${item ? item.itemPicName : ''}` }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item ? item.itemDefinition : 'Tanım Yok'}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Yorum Yap" onPress={handleButtonClick} />
      </View>
    </ScrollView>
  );
}
