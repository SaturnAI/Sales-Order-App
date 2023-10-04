import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { verticalScale, horizontalScale, moderateScale } from "../Dimension";

export const style = StyleSheet.create({
    backgroundContainer: {
        height: verticalScale(60),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    BackButton: {
        position: 'absolute',
        left: 25,
        top: 15,
    },

    headerTagAndButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    SaleOrderHeaderText: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(20),
        color: color.white,
        alignSelf: 'center',
        marginTop: verticalScale(-60),
        marginLeft: horizontalScale(150)
    },

    CartItemList: {
        height : verticalScale(750)
   }

});