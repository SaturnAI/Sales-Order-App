import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Dimension";

export const style =  StyleSheet.create({
    ActivityIndicatorContainer : {
             height : verticalScale(260),
             alignItems: 'center',
             width : horizontalScale(380),
    },

    ActivityIndicator : {
         alignSelf : 'center',
    }
})