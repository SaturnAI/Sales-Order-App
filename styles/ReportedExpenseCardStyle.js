import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({
    ExpenseCardContainer: {
        marginHorizontal: horizontalScale(20),
        flexDirection: 'row',
        marginVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
        justifyContent: 'space-between',

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

    ButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },

    ButtonReject: {
        width: horizontalScale(80),
        height: verticalScale(40),
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: moderateScale(10),
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(16),
        color: color.primary,
        fontWeight: 'bold',

    },

    ButtonApprove: {
        width: horizontalScale(80),
        height: verticalScale(40),
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: moderateScale(10),
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(16),
        color: color.primary,
        fontWeight: 'bold',
    },


})