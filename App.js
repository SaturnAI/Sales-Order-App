import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React, { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerLayout from './Layouts/DrawerLayout';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CartPage from './Screens/CartPage';
import { PaperProvider } from 'react-native-paper';
import PlacedOrdersScreen from './Screens/PlacedOrdersScreen';


const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={Store}>
        <PaperProvider>
          <NavigationContainer
            onReady={onLayoutRootView}>
            <Stack.Navigator initialRouteName='Budget App'>
              <Stack.Screen name='Budget App' component={LoginScreen} />
              <Stack.Screen name='Main Page' component={DrawerLayout} options={{ headerShown: false }} />
              <Stack.Screen name='Cart' component={CartPage} options={{ headerShown: false }} />
              <Stack.Screen name='History' component={PlacedOrdersScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
}


