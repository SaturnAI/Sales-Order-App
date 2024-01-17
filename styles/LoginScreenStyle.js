import React from "react"
import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, moderateScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

  container: {

    flex: 1,

  },

  contentContainer: {
    flex: 1,
  },


  LoginImageContainer: {
    marginTop: verticalScale(-10),
  },

  LoginImage: {
    width: moderateScale(300),
    height: moderateScale(300),
    alignSelf: 'center',
  },


  WelcomeText: {
    alignSelf: 'center',
    fontFamily: "Inter-Medium",
    fontSize: moderateScale(22),
    marginTop: verticalScale(-10),
    color: color.primary,
  },

  WelcomeText2: {
    alignSelf: 'center',
    fontFamily: "Inter-Regular",
    fontSize: moderateScale(15),
    color: color.LightBlack,
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
    width: "90%",
    alignSelf: 'center',
    marginTop: verticalScale(20),
    height: verticalScale(45),
    marginBottom: verticalScale(10),
    backgroundColor: color.Background,
    color: color.Black,
  },

  Icon: {
    marginTop: 10,
  },

  LoginButton: {

    width: "90%",
    alignSelf: 'center',
    marginTop: verticalScale(20),
    backgroundColor: color.primary,
    color: color.white,
    borderRadius: moderateScale(10),
  },

  Footer: {
    // backgroundColor : "#000000",
    alignSelf: "center",
    flex: 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'flex-end',

  },

  versionCode: {
       marginTop : verticalScale(360),
  },

  LoginLoaderContainer: {
    backgroundColor: color.white,
    height: '100%',
    opacity: .4,
    alignItems: 'center',
  },

  ActivityIndicator: {
    position: 'absolute',
    bottom: '50%'
  }

});

