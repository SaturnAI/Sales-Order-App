import React from "react";
import { horizontalScale, verticalScale, moderateScale } from '../Dimension.js';
import { color } from "../assets/Colors/Colors.js";

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    ExpenseCardsContainer: {
        marginHorizontal: horizontalScale(20),
        flexDirection: 'row',
        marginVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
        justifyContent: 'space-between',

    },

    bounceCheckbox: {
        marginRight: horizontalScale(1)
    },

    ExpenseCardLeftElementsContainer: {
        flexDirection: 'row',

    },

    ExpenseTypeText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(18),
    },

    DateText: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(14),
        marginLeft: horizontalScale(-5),
    },

    ExpenseCardRightElementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    AmountText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(19),
        marginLeft: horizontalScale(4),
        color: color.primary,
    },

    RemarksContainer: {
        marginTop: verticalScale(-10),
        marginLeft: horizontalScale(30),
        marginBottom: verticalScale(10),
    },

    RemarksText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
    },

    RemarksName: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(14),
        width: horizontalScale(300),
    },

    CardLine: {
        borderWidth: moderateScale(0.6),
        width: horizontalScale(340),
        marginHorizontal: horizontalScale(20),
    }


});