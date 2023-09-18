import React from "react";
import { horizontalScale, verticalScale, moderateScale } from '../Dimension.js';
import { color } from "../assets/Colors/Colors.js";

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    backgroundContainer: {
        height: verticalScale(200),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    backgroundGreetContainer: {
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        marginTop: verticalScale(-170),
    },

    GreetNotifyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Greeting: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: color.white,

    },

    Username: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(22),
        fontWeight: '600',
        color: color.white,
    },

    LeftUserNameContainer: {
        marginLeft: horizontalScale(1),
    },

    NotificationIconContainer: {
        marginRight: horizontalScale(20),
    },



    BalanceCard: {
        backgroundColor: color.BlueSecondry,
        alignSelf: 'center',
        marginTop: verticalScale(30),
        borderRadius: moderateScale(20),
        height: verticalScale(130),
    },

    TotalBalanceContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(20),

    },

    TotalBalanceText: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(17),
        color: color.white,

    },

    TotalBalanceAmountContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(5),
        alignItems: 'center',
    },

    TotalBalanceAmount: {
        fontFamily: 'Inter-Bold',
        fontSize: moderateScale(26),
        color: color.white,
        marginLeft: horizontalScale(5),
    },


    TransactionHistoryTextContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        height: verticalScale(460),
        marginTop: verticalScale(10),
    }

});