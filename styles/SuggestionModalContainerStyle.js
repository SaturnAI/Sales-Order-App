import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

export const style = StyleSheet.create({
    SuggestionModalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '30%',
        backgroundColor: color.Gray,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
    },

    ChatContainer: {
        marginTop: verticalScale(-55),
    },

    InsideContainer: {
        marginHorizontal: horizontalScale(30),
        marginTop: verticalScale(20)
    },

    AskMessageContainer: {
        alignSelf: 'center',
        marginBottom: verticalScale(20),
    },

    MessageText: {
        fontFamily: 'Inter-SemiBold',
        color: color.primary,
    },

    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


    ButtonsTextContainer: {
        backgroundColor: color.lightBlue,
        borderRadius: moderateScale(20),
        width: horizontalScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
    },

    ButtonText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(15),
        color: color.primary,
    },

    ActiveButtonText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(15),
        color: color.white,
    },

    ActiveButtonsTextContainer: {
        backgroundColor: color.primary,
        borderRadius: moderateScale(20),
        width: horizontalScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
    },

    CrossIcon: {
        alignSelf: 'flex-end',
    }
})