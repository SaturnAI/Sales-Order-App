import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Pressable
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-native-shadow-cards";
import { style } from "../styles/ExpenseListStyle";
import greetingTime from "greeting-time";
import { Ionicons } from '@expo/vector-icons';
import { color } from "../assets/Colors/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { verticalScale, moderateScale, horizontalScale } from "../Dimension";
import TransactionCard from "../componants/TransactionCard";
import { useState } from "react";
import ModalComp from "../componants/ModalComp";

import { calculateAmount, setModalVisible } from "../store/Slices/ExpenseFormSlice";
import { ExpenseDataApi } from "../util/http";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setName } from "../store/Slices/LoginScreenSlice";
import { setLastID } from "../store/Slices/ChatScreenSlice";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const { data, totalAmount } = useSelector((state) => state.ExpenseFormSlice);
  const [animateToNumber, setAnimateToNumber] = useState(7398263);
  const username = useSelector((state) => state.LoginScreenSlice.username);



  useEffect(() => {
    const getname = async () => {
      const name = JSON.parse(await AsyncStorage.getItem('name'));
      const role = JSON.parse(await AsyncStorage.getItem('role'));
      const lastId = JSON.parse(await AsyncStorage.getItem('lastID'));
      dispatch(setName({name, role}));
      dispatch(setLastID({last_id : lastId}))
    }
    dispatch(calculateAmount())
    getname();
  }, [])


  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />

      <View style={style.backgroundContainer} />
      <View style={style.backgroundGreetContainer}>
        <View style={style.GreetNotifyContainer} >

          <View style={style.LeftUserNameContainer}>
            <Text style={style.Greeting}>{greetingTime(new Date())}!</Text>
            <Text style={style.Username}>{username}</Text>
          </View>

          <View style={style.NotificationIconContainer}>
            <Ionicons name="notifications" size={24} color={color.white} />
          </View>

        </View>
      </View>


      <Card style={style.BalanceCard}>
        <View style={style.TotalBalanceContainer}>
          <Text style={style.TotalBalanceText}>Total Expense</Text>
          <View style={style.TotalBalanceAmountContainer}>
            <FontAwesome name="rupee" size={moderateScale(25)} color={color.white} />
            <Text style={style.TotalBalanceAmount}>{totalAmount}</Text>
          </View>
        </View>
      </Card>

      <View style={style.TransactionHistoryTextContainer}>
        <Text style={style.TransactionHistoryText}>Transaction History</Text>
        <Pressable onPress={() => dispatch(setModalVisible())}  >
          <Text style={style.SeeAllTextButton}>See all</Text>
        </Pressable>
      </View>

      <View style={style.TransactionList}>
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={(itemValue) => itemValue.id}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
          renderItem={(item) => {
            return (
              <View>
                <TransactionCard item={item.item} />
              </View>
            )
          }}
        />
      </View>


      <ModalComp />



    </SafeAreaView>
  );
};

export default ExpenseList;

