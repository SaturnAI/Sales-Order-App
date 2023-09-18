import React, { useState } from "react";
import 'react-native-gesture-handler'

import { style } from "../styles/ExpenseFormStyle";

import {
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
  ToastAndroid,
  SafeAreaView,
  StatusBar
} from "react-native";

import { PickerComp } from "../componants/PickerComp";

import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Card } from 'react-native-shadow-cards';
import { db } from "../firebase/Config";
import { set, ref } from "firebase/database";
import { color } from "../assets/Colors/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale } from "../Dimension";
import {v4 as uuidv4} from 'uuid';

const ExpenseForm = () => {

  const [picker, SetPicker] = useState("Food");
  const [Amount, SetAmount] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const [Remarks, setRemarks] = useState("");

  const [dateSelected, setDateSelected] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const time = new Date().getTime();

  const create = async (picker, Amount, Date, Remarks) => {
    await set(ref(db, 'expense/' + time), {
      ExpenseType: picker,
      Amount: Amount,
      Date: Date,
      Remarks: Remarks,
      id: uuidv4().toString(),
    });
    SetAmount("");
    setRemarks("");
    showToast();
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datepick) => {
    setDateSelected(true);
    setDate(datepick.toDateString());
    hideDatePicker();
  };

  const showToast = () => {
    ToastAndroid.show('Saved Successfully!', ToastAndroid.SHORT);
  }

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <ScrollView>
        <View style={style.backgroundContainer} />
        <Card style={style.formContainer}>


          <View style={style.formContainerInside}>

            <View style={style.PickerComponent}>
              <Text style={style.Text}>Expense Type</Text>
              <View style={style.ComponantBackgroundPicker}>
                <PickerComp selectedValue={picker} setPicker={SetPicker} />
              </View>
            </View>

            <View style={style.PickerComponent}>
              <Text style={style.Text}>Amount</Text>
              <View style={style.ComponantBackgroundAmount}>
                <FontAwesome name="rupee" size={moderateScale(25)} color={color.primary} />
                <TextInput
                  value={Amount}
                  onChangeText={(itemValue) => SetAmount(itemValue)}
                  style={style.TextInput}
                  keyboardType="number-pad"
                  maxLength={20}
                />
              </View>
            </View>

            <View style={style.PickerComponent}>
              <Text style={style.Text}>Date</Text>
              <View style={style.ComponantBackgroundDate}>
                <Pressable onPress={showDatePicker}>
                  <Text style={style.DateText}>{!dateSelected ? new Date().toDateString() : date}</Text>
                </Pressable>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  display="spinner"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={new Date()}
                />
              </View>
            </View>

            <View style={style.PickerComponent}>
              <Text style={style.Text}>Remarks</Text>
              <View style={style.ComponantBackgroundRemarks}>
                <TextInput
                  style={style.TextInputRemarks}
                  placeholder="Enter Remarks"
                  editable
                  multiline
                  maxLength={100}
                  value={Remarks}
                  onChangeText={(itemValue) => setRemarks(itemValue)}
                />
              </View>
            </View>

            <View style={style.ComponantBackgroundButton}>
              <Button style={style.Button} title="Save"
                onPress={() => { create(picker, Amount, date, Remarks); }}
                color={color.primary} />
            </View>


          </View>

        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};



export default ExpenseForm;
