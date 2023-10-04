import React, { useEffect, useState } from "react";

import { View, Text, Button, StyleSheet, TextInput, Alert, Modal } from "react-native";
import { Card } from "react-native-shadow-cards";
import { style } from "../styles/LoginScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/Slices/LoginScreenSlice";
import { Login } from "../util/http";
import { setIsLoading } from "../store/Slices/LoginScreenSlice";
import LoginLoadingModal from "../componants/LoginLoadingModal";

const LoginScreen = ({ navigation }) => {


  const dispatch = useDispatch();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  })


  const login = async (loginCredentials, str) => {
    // await dispatch(setIsLoading())
    // const data = await Login(loginCredentials, str)
    // if (data.success == false) {
    //   await dispatch(setIsLoading())
    //   Alert.alert(`Error : ${data.message}`)
    // }
    // if (data.success == true) {
      await dispatch(setUserData(loginCredentials));
    //   await dispatch(setIsLoading())
      navigation.replace("Main Page")
    // }
    
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
            login(loginCredentials, "login")
          }}
        />
      </Card>

      <LoginLoadingModal />

    </View>
  );
};


export default LoginScreen;