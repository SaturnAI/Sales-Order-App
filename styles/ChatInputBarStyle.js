import React from "react";
import { moderateScale, verticalScale, horizontalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    textInputField: {
        flexDirection: "row",
        borderColor: color.Black,
        borderWidth: 1,
        margin: 10,
        borderRadius: moderateScale(20),
        backgroundColor: color.white,

    },

    textInput: {
        flex: 1,
    },

    textInputBoxDown: {
        margin: 10,
        padding: 1,
        borderRadius: 30,
        color: color.Black,
        fontWeight: "400",
        fontSize: moderateScale(16),
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginRight: 10,
        marginBottom: 5,
    },

    button: {
        alignSelf: "flex-end",
        padding: 10,
        borderRadius: moderateScale(20),
    },
});