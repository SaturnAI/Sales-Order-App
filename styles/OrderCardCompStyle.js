import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

    CardBody: {
        marginVertical: verticalScale(6),
    },

    CardContainer: {
        flexDirection: 'row',
        height: verticalScale(200),
    },

    DataContainer1: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(20),
        height: verticalScale(125)
    },

    subDataContainer11: {
        height: verticalScale(70),
        marginVertical: verticalScale(10),
        marginTop: verticalScale(20),
    },

    subDataContainer12: {
        height: verticalScale(70),
        marginVertical: verticalScale(10),
        marginTop: verticalScale(60),
    },

    DataContainer2: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(20),
        height: verticalScale(125)

    },

    subDataContainer21: {
        height: verticalScale(70),
        marginVertical: verticalScale(10),
        marginTop: verticalScale(20),
    },

    subDataContainer22: {
        height: verticalScale(70),
        marginVertical: verticalScale(10),
        marginTop: verticalScale(60),

    },

    CardHeadingText: {
        marginTop: verticalScale(10),
        width: horizontalScale(130),
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(15)
    },

    AnswerText: {
        width: horizontalScale(130),
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(15)
    },


    WarningTextContainer: {
        position: 'absolute',
        left: 20,
        bottom: 30,
    },

    AlertText: {
        color: color.Red,
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(25)
    },

    SuccessText: {
        color: color.Green,
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        marginLeft: horizontalScale(25)
    },

    ClickMeText: {
        fontFamily: 'Inter-SemiBold',
        color: color.white,
        backgroundColor: color.Red,
        width: horizontalScale(100),
        textAlign: 'center',
        borderRadius: moderateScale(20),
        height: verticalScale(25)
    },

    ClickMeTextSuccess: {
        fontFamily: 'Inter-SemiBold',
        color: color.white,
        backgroundColor: color.Green,
        width: horizontalScale(150),
        textAlign: 'center',
        borderRadius: moderateScale(20),
        height: verticalScale(25)
    },




    AddToCartButton: {
        alignSelf: 'flex-end',
        marginHorizontal: horizontalScale(40),
        marginBottom: verticalScale(30),
        marginTop: verticalScale(-10),
        backgroundColor: color.primary,
        padding: 10,
        borderRadius: moderateScale(40),

    },

    AddToCartText: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(13),
        color: color.white,
    }



})