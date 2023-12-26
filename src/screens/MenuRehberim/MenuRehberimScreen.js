
import React, { useLayoutEffect } from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from 'react-native';
import MenuImage from "../../components/MenuImage/MenuImage";

export default function MenuRehberimScreen(props) {
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
    

    const normalText = {
        
    }

     return (
        <View style={styles.containerHero}>
            <ImageBackground
                source={require('../../../assets/heroBgimage.jpeg')} 
                style={styles.backgroundImage}
                resizeMode="contain"
            >
            <Text style={styles.header}>
                <Text style={styles.whiteText}>Menu</Text>
                <Text style={styles.redText}> Rehberim</Text>
                </Text>
            </ImageBackground>
            
            <View style={styles.containerAbout}>
                <Text style={[styles.normalText, styles.centerText]}>
                    Menu Rehberim ile bütün menüler elinizin altında !
                </Text>
                <Text style={[styles.normalText, styles.centerText]}>
                    Güncel fiyatlar tek bir yerde !
                </Text>
            </View>
        </View>
        
        
    );

};

