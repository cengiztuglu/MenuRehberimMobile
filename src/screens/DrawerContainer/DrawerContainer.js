import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="MENU REHBERIM"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("MenuRehberim");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="LOGIN"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Login");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="ANA SAYFA"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("AnaSayfa");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="RESTORANLAR"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Restaurants");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="MENU"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("MenuItems");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
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
