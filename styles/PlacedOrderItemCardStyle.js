import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({


    PlacedCardContainer: {
        alignItems: 'center',
        paddingVertical: verticalScale(5),
    },

    PlacedText: {
        fontFamily: 'Inter-Regular',
        marginLeft: horizontalScale(20),
        marginTop: horizontalScale(10),
        color: color.Gray,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(10),
    },

    BottomItem:{
         flexDirection: 'column',
         justifyContent: "space-between"

    },

    containerText1: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        marginBottom: 1,
    },

    containerText2: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(15),
        marginBottom: verticalScale(20),
        width: moderateScale(120)
    },

    remarks: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(15),
        marginBottom: verticalScale(1)
    },

    BottomBar : {
        borderWidth : moderateScale(2),
        borderColor : color.primary,
        borderRadius : moderateScale(20)
    },


});