
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
                    <Text style={styles.redText}> Bütün menüler </Text> 
                    elinizin altında !
                </Text>
                <Text style={[styles.normalText, styles.centerText,]}>
                <   Text style={styles.redText}> Güncel fiyatlar </Text> 
                    tek bir yerde !
                </Text>
                <Text style={styles.paragraphText}>
                Yemek Tutkunları için bir araya getirdiğimiz bu uygulama, damak zevkinize hitap edecek pek çok farklı restoranın menülerini ve güncel fiyatlarını bir arada sunuyor.
                </Text>
                <Text style={styles.paragraphText}>
                Uygulamamızda bulabileceğiniz geniş yelpaze, her damak tadına uygun seçenekler sunuyor. Size en yakın veya tercih ettiğiniz restoranın en güncel menüsüne ve fiyatlarına kolayca ulaşmanızı sağlayarak, lezzetli bir deneyim için rehberlik ediyoruz.
                </Text>
            </View>

            <View style={styles.experienceContainer}>
                <View style={styles.experienceItem}>
                    <Text style={[styles.numberText,styles.redText]}>2</Text>
                    <Text style={[styles.centerText,styles.boldText]}>Yıllık Deneyim</Text>
                </View>
                <View style={styles.experienceItem}>
                    <Text style={[styles.numberText,styles.redText]}>2</Text>
                    <Text style={[styles.centerText,styles.boldText]}>Takım Üyesi</Text>
                </View>
                <View style={styles.experienceItem}>
                    <Text style={[styles.numberText,styles.redText]}>10</Text>
                    <Text style={[styles.centerText,styles.boldText]}>Restoran</Text>
                </View>
            </View>
            <View style={styles.experienceContainer}>
                <View style={styles.experienceItem}>
                    <Text style={[styles.numberText,styles.redText]}>650</Text>
                    <Text style={[styles.centerText,styles.boldText]}>Kullanıcı</Text>
                </View>
                <View style={styles.experienceItem}>
                    <Text style={[styles.numberText,styles.redText]}>10+</Text>
                    <Text style={[styles.centerText,styles.boldText]}>Menu</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <Text style={styles.footerText}>Yusuf Furkan Aktay</Text>
                    <Text style={styles.footerText}>202803062</Text>
                </View>
                <View style={styles.footerRight}>
                    <Text style={styles.footerText}>Cengiz Tuglu</Text>
                    <Text style={styles.footerText}>202805003</Text>
                </View>
            </View>
        </View>
    );
};

