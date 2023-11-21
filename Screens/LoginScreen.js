import React, { useEffect, useState } from "react";

import { View, Text, Button, StyleSheet, TextInput, Alert, Modal } from "react-native";
import { Card } from "react-native-shadow-cards";
import { style } from "../styles/LoginScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/Slices/LoginScreenSlice";
import { Login, getAccessToken } from "../util/http";
import { setIsLoading } from "../store/Slices/LoginScreenSlice";
import LoginLoadingModal from "../componants/LoginLoadingModal";
import { setLastID, setSelectedData } from "../store/Slices/ChatScreenSlice";

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
      navigation.replace("Main Page")
    }
    
  }



  return (
    <View style={style.container}>
      <View>
        <Text style={style.headingText}>Login</Text>
      </View>

      <Card style={style.cardContainer}>
        <View style={style.individualContainer}>
          <Text style={style.textValue}>Username/Mail</Text>
          <TextInput
            style={style.textInput}
            placeholder="john@example.com"
            onChangeText={(itemValue) => setLoginCredentials({
              username: itemValue,
              password: loginCredentials.password
            })}
          />
        </View>

        <View style={style.individualContainer}>
          <Text style={style.textValue}>Password</Text>
          <TextInput
            style={style.textInput}
            secureTextEntry={true}
            onChangeText={(itemValue) => setLoginCredentials({
              username: loginCredentials.username,
              password: itemValue
            })}
          />
        </View>

        <Button
          title="Login"
          onPress={async () => {
            login(loginCredentials)
          }}
        />
      </Card>

      <LoginLoadingModal  />

    </View>
  );
};


export default LoginScreen;