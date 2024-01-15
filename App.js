import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React, { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CartPage from './Screens/CartPage';
import { PaperProvider } from 'react-native-paper';
import PlacedOrdersScreen from './Screens/PlacedOrdersScreen';
import PdfScreen from './Screens/PdfScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

import ExpenseSalePermissionScreen from './Screens/ExpenseSalePermissionScreen';
import TabLayout from './Layouts/TabLayout';
import TabLayout2 from './Layouts/TabLayout2';
import EnquiryScreen from './Screens/EnquiryScreen';
import SignUp from './Screens/SignUp';


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

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function prepare() {
      let keys = ["refreshToken", "jwtToken"]
      await SplashScreen.preventAutoHideAsync();
      const refTok = JSON.parse(await AsyncStorage.getItem("refreshToken"));
      const jwtTok = JSON.parse(await AsyncStorage.getItem("jwtToken"));
      

      if(refTok && jwtTok){
         setAuth(true);
        
         
      }else{
        setAuth(false);
      }
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
        <PaperProvider >
          <NavigationContainer
            onReady={onLayoutRootView}>
            <Stack.Navigator initialRouteName={auth ? 'PermissionPage' : "Budget App"}>

              <Stack.Screen name='Budget App' component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name='PermissionPage' component={ExpenseSalePermissionScreen} options={{ headerShown: false }} />
              <Stack.Screen name='Main Page' component={TabLayout} options={{ headerShown: false }} />
              <Stack.Screen name='Sale Order' component={TabLayout2} options={{ headerShown: false }} />
              <Stack.Screen name='Cart' component={CartPage} options={{ headerShown: false }} />
              <Stack.Screen name='History' component={PlacedOrdersScreen} options={{ headerShown: false }} />
              <Stack.Screen name='PDF' component={PdfScreen} />
              <Stack.Screen name='Enquiry' component={EnquiryScreen} options={{ headerShown: false }} />
              <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
              
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
}


