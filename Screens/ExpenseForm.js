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
  StatusBar,
  Alert
} from "react-native";

import { PickerComp } from "../componants/PickerComp";

import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Card } from 'react-native-shadow-cards';
import { color } from "../assets/Colors/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale } from "../Dimension";
import { v4 as uuidv4 } from 'uuid';
import { ExpenseDataApi, ExpenseDataApiPost } from "../util/http";
import { useDispatch } from "react-redux";
import { calculateAmount, updateData } from "../store/Slices/ExpenseFormSlice";
import { getData } from "../store/Slices/PendingExpenseSlice";

const ExpenseForm = () => {

  const dispatch = useDispatch()
  const [picker, SetPicker] = useState("Food");
  const [Amount, SetAmount] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const [Remarks, setRemarks] = useState("");

  const [dateSelected, setDateSelected] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const time = new Date().getTime();

  const create = async (picker, Amount, Date, Remarks) => {
    const id = uuidv4().toString();
    await ExpenseDataApiPost(picker, Amount, Date, Remarks, id)
    SetAmount("");
    setRemarks("");
    showToast();
    const data = await ExpenseDataApi();
    dispatch(getData(data.data))

    dispatch(updateData(data.data))
    dispatch(calculateAmount(data.data));
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datepick) => {
    setDateSelected(true);
    const str = datepick.toDateString()
    const first = str.slice(3, 10);
    const second = str.slice(10, str.length + 1)
    setDate(`${first},${second}`);
    hideDatePicker();
  };

  const showToast = () => {
    ToastAndroid.show('Saved Successfully!', ToastAndroid.SHORT);
  }

  const str2 = new Date().toDateString();

  const first1 = str2.slice(3, 10);
  const second1 = str2.slice(10, str2.length + 1)

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
                  <Text style={style.DateText}>{!dateSelected ? `${first1},${second1}` : date}</Text>
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
              <Text style={style.Text}>Expense Description</Text>
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
                onPress={() => {
                  if (Amount == "") {
                    Alert.alert("Error", "Please Enter Amount");
                  }
                  else {
                    create(picker, Amount, date, Remarks)
                  }
                }}
                color={color.primary} />
            </View>


          </View>

        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};



export default ExpenseForm;
