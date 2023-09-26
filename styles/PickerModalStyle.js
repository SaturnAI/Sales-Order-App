import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

export const style = StyleSheet.create({
    ModalContainer: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        position: 'absolute',
        bottom: '30%',
        backgroundColor: color.Ivory,
    },

    InnerCardContainer: {
        margin: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    PleaseSpecifyText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        color: color.DarkRed,
    },

    FlatListContainer: {
        margin: 10,
    },

    RenderCardContainer: {
        flexDirection: 'row',
        marginVertical: verticalScale(10),
        marginHorizontal: horizontalScale(10),
    },

    RenderCards: {
       marginLeft : horizontalScale(20),
       width : horizontalScale(240),
    },

    underLine: {
        height: verticalScale(1),
        backgroundColor: color.Black,
        marginVertical: verticalScale(10),

    }



})