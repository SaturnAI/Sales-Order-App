import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

    CardBody: {
        alignSelf : 'flex-end',
        marginRight : horizontalScale(10),
        padding : 10,
        backgroundColor : color.primary,
    },

    QueryChatContainer: {

    },

    QueryText : {
        color : color.white,
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(16)
    }
});