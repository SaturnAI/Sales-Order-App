import React from 'react';
import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale, moderateScale } from '../Dimension';
import { color } from '../assets/Colors/Colors'

export const style = StyleSheet.create({
  chatContainer: {
    marginTop: verticalScale(-20),
    flex: 10,
  },


  responseScreen: {
    flex: 10,
  },

  responseContainer: {
    // marginHorizontal: horizontalScale(0.1),
  },

  textInputField: {
    flexDirection: "row",
    borderColor: color.Black,
    borderWidth: 1,
    marginVertical: moderateScale(1),
    borderRadius: moderateScale(30),
    backgroundColor: color.white,
  },

  textInput: {
    flex: 1,
  },

  chatContainerResponse: {
    flex: 9,
    marginVertical: verticalScale(1),
    padding: 20,
    borderRadius: moderateScale(20),
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(5),
  },

  button: {
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: moderateScale(10),
  },

  textInputBoxDown: {
    margin: 10,
    padding: 5,
    borderRadius: moderateScale(20),
    color: color.Black,
    fontWeight: "400",
    fontSize: moderateScale(20),
  },


  //Response Container Styling

  container: {
    flexDirection: "row",
  },




  containerText1: {
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 1,
    fontFamily: 'Inter-SemiBold'
  },

  containerText2: {
    fontWeight: "300",
    fontSize: moderateScale(16),
    marginBottom: 25,
    fontFamily: 'Inter-Regular',
    width: horizontalScale(130)
  },

  remarks: {
    width: 150,
    padding: 'auto',
  },


  //picker styling

  pickerContainer: {
    marginLeft: 10,
    width: '100%',

  },

  PickerWarningText: {
    color: 'red',
    fontSize: 16,
   

  },

  PickerSelectedText: {
    opacity: 0,
  },

  OrderButtonContainer: {
    margin: 1,
    height: 40,
    width: 120,
    justifyContent: 'center',
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: color.ButtonBlue,
    right: 0,
    alignSelf: "flex-end",
  },

  Orderbutton: {

  },

  OrderButtonText: {
    color: 'white',
    fontSize: 20,

  },

  backgroundContainer: {
    height: verticalScale(60),
    backgroundColor: color.primary,
    borderBottomLeftRadius: moderateScale(50),
    borderBottomRightRadius: moderateScale(50),
    width: horizontalScale(373),
    marginLeft: horizontalScale(-20),

  },

  headerTagAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  SaleOrderHeaderText: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(20),
    color: color.white,
    alignSelf: 'center',
    marginTop: verticalScale(-60),
    marginLeft: horizontalScale(80)
  },

  CartIcon: {
    marginTop: verticalScale(-45),
    marginRight: horizontalScale(10)
  },

  tutorialTextContainer: {
    marginTop: verticalScale(300),
    alignSelf: 'center',
  },

  WelcomeText: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(15),
    alignSelf: 'center',
  },

  QueryText: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
    fontFamily: 'Inter-Regular',

  },


});