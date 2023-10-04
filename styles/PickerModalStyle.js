import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

export const style = StyleSheet.create({

    ModalBody: {
        width: 300,
        height: 300,
    },

    CardContainer: {
        alignSelf: 'center',
        marginTop:verticalScale(30),
       marginBottom:verticalScale(100),
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

    PleaseSpecifyText2: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        color: color.DarkRed,
        marginBottom: verticalScale(20),
        marginTop: verticalScale(10),
    },

    FlatListContainer: {
        margin: 10,
        marginBottom: verticalScale(110),
        
    },

    RenderCardContainer: {
        flexDirection: 'row',
        marginVertical: verticalScale(10),
        marginHorizontal: horizontalScale(10),
    },

    DoubleFlatListParantContainer: {
        marginBottom: verticalScale(-100)
    },

    DoubleListContainer: {
        height: 300,
    },

    RenderCards: {
        marginLeft: horizontalScale(20),
        width: horizontalScale(240),
    },

    underLine: {
        height: verticalScale(1),
        backgroundColor: color.Black,
        marginVertical: verticalScale(10),

    }



})