import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

export const style = StyleSheet.create({
     
       ModalComponent: {  
          marginTop: verticalScale(50),
          marginBottom : verticalScale(40),
          backgroundColor : 'white',
          borderTopLeftRadius: moderateScale(30),
          borderTopRightRadius: moderateScale(30),
        },

        CloseContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: verticalScale(20),
        },


        CloseText : {
               fontFamily: 'Inter-Regular',
               fontSize: moderateScale(10),
        },

        HeaderBar : {
            borderWidth : horizontalScale(2),
            width: horizontalScale(60),
            alignSelf: 'center',
            borderRadius: moderateScale(50),
           marginBottom:verticalScale(10),
        },

        AttachToContainer: {
            justifyContent: 'center',
        },

        AttachToText: {
            marginLeft: horizontalScale(20),
            fontFamily: 'Inter-SemiBold',
            fontSize: moderateScale(18),
        }

});