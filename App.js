/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailScreen/ProductDetailsScreen';
import { FavoritesProvider } from './src/context/FavoritesContext';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <FavoritesProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={theme.colors.card}
          />
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.text }}>
            <Stack.Screen name="Products" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Details' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </FavoritesProvider>
  );
}

export default App;
