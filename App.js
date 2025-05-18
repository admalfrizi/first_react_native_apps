import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealtDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#351401"
    },
    headerTintColor: 'white',
    sceneStyle: {
      backgroundColor: '#24180f'
    },
    drawerContentStyle: {
      backgroundColor: '#351401'
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name="MealsCategories" component={CategoriesScreen} options={{
      title: "Meals Categories",
      drawerIcon: (({color, size}) => <Ionicons name="list" color={color} size={size}/>)
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={
      {
        drawerIcon: (({color, size}) => <Ionicons name="star" color={color} size={size}/>)
      }
    }/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#351401"
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#24180f'
              }
          }}>
            <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={
              {
                headerShown: false,
              }
            }/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
            <Stack.Screen 
              name='MealDetail' 
              component={MealtDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
