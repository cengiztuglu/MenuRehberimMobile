import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import MenuRehberim from '../screens/MenuRehberim/MenuRehberimScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import EditRestaurantScreen from '../screens/EditRestaurant/EditRestaurantScreen';
import MenuItemsScreen from '../screens/MenuItems/MenuItemsScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            color: '#c10e18',
          }
      }}
    >
      <Stack.Screen name='Menu Rehberim' component={MenuRehberim} />
      <Stack.Screen name='Giriş Yap' component={LoginScreen} />
      <Stack.Screen name='Kayıt Ol' component={RegisterScreen} />
      <Stack.Screen name='AnaSayfa' component={HomeScreen} />
      <Stack.Screen name='Restaurants' component={RestaurantsScreen}/>
      <Stack.Screen name='MenuItems' component={MenuItemsScreen}/>
      <Stack.Screen name='Restoranınızı Tanımlayın' component={EditRestaurantScreen}/>
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;