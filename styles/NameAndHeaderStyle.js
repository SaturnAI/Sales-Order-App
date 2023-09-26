import { StyleSheet } from "react-native";
import { moderateScale, horizontalScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({
    NameAndImageContainer: {
        flexDirection: 'row',
    },

    Image: {
        backgroundColor: color.white,
        height: verticalScale(40),
        width: horizontalScale(40),
        borderRadius: moderateScale(50)
    },

    NameAndStatusContainer: {
        marginLeft: horizontalScale(15),
    },

    HeaderText: {
        fontFamily: 'Inter-Regular',
        fontWeight : '600',
        fontSize: moderateScale(20),
        color: color.white,
    },

    OnlineStatusText: {
        fontFamily: 'Inter-Regular',
        color: color.white,
        fontSize: moderateScale(12)
    }
})