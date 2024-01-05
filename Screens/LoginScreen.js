import React, { useEffect, useState } from "react";

import { View, Text, Alert, Modal, Image, StatusBar, SafeAreaView } from "react-native";
import { TextInput, Button } from 'react-native-paper';

import { Card } from "react-native-shadow-cards";
import { style } from "../styles/LoginScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/Slices/LoginScreenSlice";
import { Login, getAccessToken } from "../util/http";
import { setIsLoading } from "../store/Slices/LoginScreenSlice";
import LoginLoadingModal from "../componants/LoginLoadingModal";
import { setLastID, setSelectedData } from "../store/Slices/ChatScreenSlice";
import { color } from "../assets/Colors/Colors";

const LoginScreen = ({ navigation }) => {


  const dispatch = useDispatch();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  })

  const login = async (loginCredentials) => {
    await dispatch(setIsLoading())
    const data = await Login(loginCredentials)
    const tokenData = await getAccessToken(loginCredentials.username)
    if (tokenData.success == false || data.success == false) {
      await dispatch(setIsLoading())
      Alert.alert(`Error : ${data.message}`)
    }
    if (tokenData.success == true && data.success == true) {
      await dispatch(setUserData(data));
      await dispatch(setLastID(data))
      await dispatch(setSelectedData());
      await dispatch(setIsLoading())
      navigation.replace("PermissionPage")
    }

  }

  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <SafeAreaView  >

          <StatusBar
            animated={true}
            backgroundColor={color.Background}
            barStyle="dark-content"
            translucent={true}
          />


          <View style={style.LoginImageContainer}>
            <Image style={style.LoginImage} source={require('../assets/LoginScreenImage.png')} />
          </View>

          <View>
            <Text style={style.WelcomeText}>Welcome to Sale Buddy!</Text>
            <Text style={style.WelcomeText2}>Login in to Continue</Text>
          </View>

          <View>

            <TextInput
              style={style.textInput}
              mode="outlined"
              label="Email"
              placeholder="John@gmail.com"
              textColor={color.Black}
              placeholderTextColor={color.Black}
              onChangeText={(itemValue) => setLoginCredentials({
                username: itemValue,
                password: loginCredentials.password
              })}
              theme={{
                colors: {
                  primary: color.primary,
                }
              }}
            />

            <TextInput
              style={style.textInput}
              mode="outlined"
              label="Password"
              secureTextEntry={true}
              textColor={color.Black}
              placeholderTextColor={color.Black}
              onChangeText={(itemValue) => setLoginCredentials({
                username: loginCredentials.username,
                password: itemValue
              })}
              theme={{
                colors: {
                  primary: color.primary,
                }
              }}
            />

          </View>

          <View>
            <Button
              style={style.LoginButton}
              textColor={color.white}
              mode="contained-tonal"
              onPress={
                async () => {
                  login(loginCredentials)
                }
              }>
              Login
            </Button>
          </View>

        </SafeAreaView>
      </View>

      <View style={style.Footer}>
        <Text style={style.versionCode}>Version 3.0.3</Text>
      </View>

      <LoginLoadingModal />

    </View>
  );
};


export default LoginScreen;