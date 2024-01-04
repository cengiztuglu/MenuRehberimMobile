import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/MenuRehberimLogo.png")} /> 
        <MenuButton
          title="MENU REHBERIM"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Menu Rehberim");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="GİRİŞ YAP"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Giriş Yap");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="RESTORANLAR"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Restoranlar");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="MENU"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Menu");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
        title="RESTORAN PROFILIM"
        source={require("../../../assets/icons/category.png")}
        onPress={() => {
          navigation.navigate("Restoranınızı Tanımlayın");
          navigation.closeDrawer();
        }}
      />
      <MenuButton
      title="MENU ICERIGIM"
      source={require("../../../assets/icons/category.png")}
      onPress={() => {
        navigation.navigate("Menunuzu Duzenleyin");
        navigation.closeDrawer();
      }}
    />
      <MenuButton
      title="YORUMLAR"
      source={require("../../../assets/icons/category.png")}
      onPress={() => {
        navigation.navigate("Yorumlar");
        navigation.closeDrawer();
      }}
      />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
