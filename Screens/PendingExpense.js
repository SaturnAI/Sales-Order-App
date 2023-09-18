import React, { useEffect } from "react";
import { style } from "../styles/PendingExpenseStyle";


import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Pressable,
  StatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/Slices/PendingExpenseSlice";
import { color } from "../assets/Colors/Colors";
import ChartComp from "../componants/ChartComp";
import { pushAmount } from "../store/Slices/PendingExpenseSlice";
import TransactionCard from "../componants/TransactionCard";
import { setModalVisible } from "../store/Slices/PendingExpenseSlice";
import ModalCompPending from "../componants/ModalCompPending";

const PendingExpense = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.ExpenseFormSlice.data);

  const role = useSelector((state) => state.LoginScreenSlice.role);
  const Amount = useSelector((state) => state.PendingExpenseSlice.Amount);
  const tempData = useSelector((state) => state.PendingExpenseSlice.tempData);
  const AmountLoading = useSelector((state) => state.PendingExpenseSlice.isAmountLoading);
  const updateData = async () => {
    await dispatch(getData(data));

  }

  useEffect(() => {
    updateData();
    if (data) {
      dispatch(pushAmount(data))
    }
  }, [])



  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <View style={style.backgroundContainer} />

      <ScrollView
        horizontal={true}>
        {AmountLoading ? <ActivityIndicator /> : <ChartComp />}
      </ScrollView>

      <View style={style.TransactionHistoryTextContainer}>
        <Text style={style.TransactionHistoryText}>Top Expenses</Text>

        {role == 'user'
          ?
          <Pressable onPress={() => dispatch(setModalVisible())}>
            <View>
              <Text style={style.SeeAllTextButton}>See all</Text>
            </View>
          </Pressable>
          :
          null}

      </View>

      <View style={style.TransactionList}>
        <FlatList
          data={!tempData ? data : tempData}
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

      <ModalCompPending />

    </SafeAreaView>
  );
};

export default PendingExpense;


