import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

export const style = StyleSheet.create({
    OrderReportSuggestions: {
        alignItems: 'center',
    },

    GreetMessage: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        color: color.primary,
        marginBottom: 5,
    },

    PleaseSpecifyMessage: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: color.primary,
        marginBottom: 20,
    },

    SuggestionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: horizontalScale(200),
        marginBottom: 20,
    },

    ButtonContainer:{
        backgroundColor : color.lightBlue,
        height: verticalScale(40),
        paddingVertical : verticalScale(8),
        borderRadius: moderateScale(50),
    },

    Buttons:{
        fontFamily: 'Inter-SemiBold',
        fontSize: 14,
        color: color.primary,
        width: horizontalScale(90),
        textAlign : 'center',
    },
})
