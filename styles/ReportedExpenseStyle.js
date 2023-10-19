import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

    backgroundContainer: {
        height: verticalScale(80),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    container: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    pendingApprovalText: {
        fontFamily: 'Inter-Bold',
        fontSize: moderateScale(16),
    },

    approvalCardList: {
        height: verticalScale(630),
        marginTop: verticalScale(10),
    },

    ReportExpenseCardStyle: {
        width: horizontalScale(355),
        marginHorizontal: horizontalScale(10),
        marginBottom: verticalScale(10),
        marginTop: verticalScale(2),
        paddingVertical: moderateScale(10),
        borderBottomWidth: moderateScale(5),
        borderBottomColor: color.primary,
    }


});