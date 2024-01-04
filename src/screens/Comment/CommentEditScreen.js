import React, { useLayoutEffect,useState } from "react";
import { FlatList, Text, View, TouchableHighlight, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import { Ionicons } from '@expo/vector-icons'; 

export default Comments = (props) => {
  const data = [
    {
      id: 1,
      name: 'Frank Odalthh',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 2,
      name: 'John DoeLink',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 3,
      name: 'March SoulLaComa',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 4,
      name: 'Finn DoRemiFaso',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
    {
      id: 5,
      name: 'Maria More More',
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    },
  ]

  const [comments, setComment] = useState(data)

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.containeritem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  const [rating, setRating] = useState(0); // Kullanıcının puanını burada tutuyoruz.

  // Yıldızları göstermek için bir dizi oluşturuyoruz.
  const stars = Array.from({ length: 5 }, (_, index) => (
    <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
      <Ionicons
        name={index < rating ? 'star' : 'star-outline'} // Seçilen puan kadar yıldızı dolu, geri kalanını boş gösteriyoruz.
        size={32}
        color="#FFD700" // Yıldız rengi
        marginTop={15}
        alignItems="center"
      />
    </TouchableOpacity>
  ));


  return (

  <View >
    <View >  
    <View style={stylesComment.form}>
      <Text style={stylesComment.label}>Yorumunuz :</Text>
        <TextInput
          style={stylesComment.input}
          placeholder="Yorumunuz"
          value={comments}
          onChangeText={setComment}
        />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={stylesComment.label}>Puanınız: </Text>
        {stars} 
      </View>
        
        <TouchableOpacity style={stylesComment.button} onPress={() => handleSubmit({itemName, itemDesc, itemPrice, itemCategory})}>
          <Text style={stylesComment.buttonText}>Kaydet</Text>
        </TouchableOpacity>
    </View>
    </View> 

    <FlatList
      style={styles.root}
      data={comments}
      extraData={this.state}
      ItemSeparatorComponent={() => {
        return <View style={stylesComment.separator} />
      }}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={item => {
        const Notification = item.item
        return (

        <View style={stylesComment.container}>
          <View style={stylesComment.content}>
            <View style={stylesComment.contentHeader}>
              <Text style={stylesComment.name}>{Notification.name}</Text>
              <Text style={stylesComment.time}>9:58 am</Text>
            </View>
              <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
            </View>
          </View>
       
        )
      }}
    />
  </View>
  )
}

const stylesComment = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 300,
  },
  topcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    width: '80%',
    marginLeft: 50,
  },
  label: {
    marginTop: 20,
    fontSize: 15,
    fontWeight:'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#c10e18',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    alignItems:'center',
  },
})


