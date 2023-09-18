import React, { useEffect, useState } from "react";

import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { Card } from "react-native-shadow-cards";
import { style } from "../styles/LoginScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/Slices/LoginScreenSlice";
import { Login, findUser } from "../util/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();


  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  })


  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //      const token = await AsyncStorage.getItem('token')
  //       const user = await findUser("existing", token)
  //       if (user.success == true) navigation.replace("Main Page")
  //     } catch (error) {
  //         if(error){
  //           navigation.replace("Budget App")
  //         }
  //     }

  //   }

  //   data();
  // }, [])

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
            // const data = await Login(loginCredentials, "login")
            // if (data.success == false) Alert.alert(`Error : ${data.message}`)
            // if (data.success == true) {
              // await dispatch(setUserData(data));
            //   navigation.replace("Main Page")
            // }
  
            navigation.replace("Main Page")

          }}
        />
      </Card>
    </View>
  );
};


export default LoginScreen;