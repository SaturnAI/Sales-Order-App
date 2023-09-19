import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, horizontalScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";


export const style = StyleSheet.create({

  backgroundContainer: {
    height: verticalScale(80),
    backgroundColor: color.primary,
    borderBottomLeftRadius: moderateScale(50),
    borderBottomRightRadius: moderateScale(50),
  },
   
  TransactionHistoryTextContainer : {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  TransactionHistoryText: {
    fontFamily: 'Inter-Bold',
    fontSize: moderateScale(16),
},

SeeAllTextButton: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(14),
},

TransactionList: {
  height: verticalScale(630),
  marginTop: verticalScale(10),
},



});