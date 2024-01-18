import React, { useLayoutEffect, useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Comments = ({ route }) => {
  const { itemid } = route.params;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchCommentsAndUserName = async () => {
      try {
        // Yorumları çek
        const responseComments = await fetch(`http://192.168.75.91:8080/api/commentList/${itemid}`);
        const dataComments = await responseComments.json();
        setComments(dataComments);

        // Kullanıcı adını çek
        const storedUserName = await AsyncStorage.getItem('username');
        if (storedUserName) {
          setUserName(storedUserName);
        }
      } catch (error) {
        console.error('Error fetching comments or username:', error);
      }
    };

    // Yorumları ve kullanıcı adını çek
    fetchCommentsAndUserName();

    // Her 5 saniyede bir yorumları güncelle
    const intervalId = setInterval(() => {
      fetchCommentsAndUserName();
    }, 5000);

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);
  }, [itemid]);

  const handleSubmit = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString(); // Tarih formatını ayarla
  
      const response = await fetch(`http://192.168.75.91:8080/api/commentAdd/${userName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: itemid,
          commentText: newComment,
          score: rating,
          commentDate: formattedDate,
        }),
      });
  
      if (response.ok) {
        // Tüm yorumları yeniden çek ve güncelle
        try {
          const responseComments = await fetch(`http://192.168.75.91:8080/api/commentList/${itemid}`);
          const dataComments = await responseComments.json();
          setComments(dataComments);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
  
        setNewComment('');
        setRating(0);
      } else {
        console.error('Error posting comment:', response.status);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };
  const stars = Array.from({ length: 5 }, (_, index) => (
    <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
      <Ionicons
        name={index < rating ? 'star' : 'star-outline'}
        size={32}
        color="#FFD700"
        marginTop={15}
        alignItems="center"
      />
    </TouchableOpacity>
  ));

  return (
    <View>
      <View style={stylesComment.form}>
        <Text style={stylesComment.label}>Yorumunuz {userName} :</Text>
        <TextInput
          style={stylesComment.input}
          placeholder="Yorumunuz"
          value={newComment}
          onChangeText={setNewComment}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={stylesComment.label}>Puanınız: </Text>
          {stars}
        </View>

        <TouchableOpacity style={stylesComment.button} onPress={handleSubmit}>
          <Text style={stylesComment.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.root}
        data={comments}
        ItemSeparatorComponent={() => <View style={stylesComment.separator} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={stylesComment.container}>
            <View style={stylesComment.content}>
              <View style={stylesComment.contentHeader}>
                <Text style={stylesComment.name}>{item.userName}</Text>
                <Text style={stylesComment.time}>({format(new Date(item.commentDate), 'yyyy-MM-dd HH:mm:ss')})</Text>
                <Text style={stylesComment.score}>Score:{item.score}</Text>

              </View>
              <Text rkType="primary3 mediumLine">{item.commentText}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
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
  score: {
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
});
