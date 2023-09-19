import React from "react";
import { style } from "../styles/PendingExpenseStyle";


import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Pressable,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../assets/Colors/Colors";
import TransactionCard from "../componants/TransactionCard";
import { setModalVisible } from "../store/Slices/PendingExpenseSlice";
import ModalCompPending from "../componants/ModalCompPending";

const PendingExpense = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.LoginScreenSlice.role);
  const tempData = useSelector((state) => state.PendingExpenseSlice.tempData);


  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <View style={style.backgroundContainer} />

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
          data={tempData}
          keyExtractor={(itemValue) => itemValue.id}
          extraData={tempData}
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


