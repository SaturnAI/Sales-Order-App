import { StyleSheet } from "react-native";
import { verticalScale, moderateScale, horizontalScale } from '../Dimension'
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

   ParantContainer: {
      flex: 1,
   },

   backgroundContainer: {
      height: verticalScale(80),
      backgroundColor: color.primary,
   },

   HeaderTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: horizontalScale(25),
      marginTop: verticalScale(-55),
   },

   CartIconContainer: {
      marginTop: verticalScale(10),
   },

   CartIconContainerCount: {
      position: 'absolute',
      backgroundColor: color.white,
      width: horizontalScale(25),
      height: verticalScale(25),
      alignItems: 'center',
      borderRadius: moderateScale(50),
      right: 0,
      marginTop: verticalScale(-17),
      marginRight: horizontalScale(-10)
   },

   CartIconContainerCountText: {
      fontSize: moderateScale(15),
      fontFamily: 'Inter-SemiBold',

   },

   FlatListContainer: {
      marginTop: verticalScale(12),
      marginLeft: horizontalScale(6),
      height: verticalScale(610),
      

   },

   ChatBackgroundContainer:{

      alignSelf: 'center',
      alignItems: 'center',
   },

   CartImageBackground: {
      width: moderateScale(400),
      height: moderateScale(400),
      alignSelf: 'center',
   },

   CartBackgroundText: {
      fontFamily : 'Inter-Medium',  
      fontSize : moderateScale(20),
      color : color.primary,
      fontWeight: "400",
   },

   OrderReportSuggestionContainer: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: '50%',
   },

   ChatBar: {
      marginTop: verticalScale(30),
      position: 'absolute',
      bottom: 1,
      width: horizontalScale(370),
      alignSelf: 'center',


   },

   Suggestions: {  
      position: 'absolute',
      bottom: '100%',
      marginLeft: horizontalScale(10),
      width: horizontalScale(200),
   },

   Card: {
      padding: 10,
      backgroundColor: color.Gray,
      marginBottom: 5,
   },

   SuggestionsText: {
       fontFamily: 'Inter-Regular',
       fontSize: moderateScale(16),
   }



})
