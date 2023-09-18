import React from "react"
import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, moderateScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

  container: {
    marginHorizontal: horizontalScale(30),
    marginVertical: verticalScale(100),
    alignItems: "center",
  },

  cardContainer: {
    justifyContent: "center",
    backgroundColor: color.white,
    width: "100%",
    padding: 20,
    borderRadius: moderateScale(10),
  },

  individualContainer: {
    marginBottom: verticalScale(30),
  },


  headingText: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: "bold",
    fontSize: moderateScale(25),
    marginBottom: verticalScale(20),
  },

  textValue: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(18),
    fontWeight: "400",
    marginBottom: verticalScale(10),
  },

  textInput: {
    width: "100%",
    height: verticalScale(40),
    justifyContent: "center",
    borderColor: color.Black,
    borderWidth: 1,
    marginLeft: horizontalScale(5),
    borderRadius: moderateScale(10),
    padding: 10,
    fontSize: moderateScale(16),
  },
});

