import React, { useState } from "react";

import { style } from '../styles/ChatScreenStyle'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StatusBar
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";


import { setQuery, setData, setLoading } from "../store/Slices/ChatScreenSlice";
import OrderCardComp from "../componants/OrderCardComp";
import OrderData from "../util/http";
import ErrorComp from "../componants/ErrorComp";
import { color } from "../assets/Colors/Colors";
import Loader from "../componants/Loader";


const ChatScreen = () => {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.ChatScreenSlice.selectedData);
  const query = useSelector((state) => state.ChatScreenSlice.queryString);

  const itemSelected = useSelector((state) => state.ChatScreenSlice.itemSelected);
  const pickerSelectedItems = useSelector((state) => state.ChatScreenSlice.pickerSelectedItems);
  const Error = useSelector((state) => state.ChatScreenSlice.error);
  const ErrorName = useSelector((state) => state.ChatScreenSlice.errorName);
  const isLoading = useSelector((state) => state.ChatScreenSlice.isLoading);
  const querySent = useSelector((state) => state.ChatScreenSlice.querySent);

  return (

    <SafeAreaView style={style.chatContainer}>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />

      <View style={style.chatContainerResponse}>

        {!querySent ?
          <View>
            <View style={style.backgroundContainer} />
            <View style={style.headerTagAndButton}>
              <Text style={style.SaleOrderHeaderText}>SALE ORDER CHAT</Text>
            </View>


            <View style={style.tutorialTextContainer}>
              <Text style={style.WelcomeText}>Welcome to the AI SALE ORDER CHAT WINDOW</Text>
              <Text style={style.QueryText}>Type Your Query for SALE ORDER</Text>
            </View>
          </View>

          :

          (isLoading ?

            <Loader query={query} />
            :
            (Error ? <ErrorComp ErrorName={ErrorName} /> :

              <FlatList
                style={style.listStyle}
                data={itemSelected ? pickerSelectedItems : selectedData}
               
                keyExtractor={(itemValue, key) => key}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
                initialNumToRender={5}
                renderItem={(item) => {
                  return (
                    <OrderCardComp item={item} />
                  );
                }
                }
              />
            )
          )

        }

      </View>

      <View style={style.textInputField}>
        <View style={style.textInput}>
          <TextInput
            style={style.textInputBoxDown}
            placeholder="Enter Your Sale Order Query..."
            onChangeText={(itemValue) => dispatch(setQuery(itemValue))}
            editable={isLoading ? false : true}
            value={query}
          />
        </View>

        <Pressable onPress={async () => {
          await dispatch(setLoading())
          const data = await OrderData(query)
          await dispatch(setData(data))
          await dispatch(setLoading())
        }
        }>
          <View style={style.buttonContainer}>
            <Feather
              style={style.button}
              name="send"
              size={24}
              color={color.primary}
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView >

  );
};

export default ChatScreen;

