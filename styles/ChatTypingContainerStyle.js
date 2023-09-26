import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({
    ChatBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(5),
        marginBottom : verticalScale(6)
    },

    TextInputContainer: {
        backgroundColor: color.Gray,
        width: horizontalScale(300),
        padding: horizontalScale(10),
        height : verticalScale(50),
        textAlign : 'center',
        borderRadius : moderateScale(50),
    },

    TextInput: {
        marginHorizontal : horizontalScale(10),
        fontFamily : 'Inter-Regular',
        fontSize : moderateScale(15),
        fontWeight : '600',
    },

    SendButtonLoader : {
        marginRight : horizontalScale(20),
        marginTop : verticalScale(10),
    },

    SendButton: {
        marginRight : horizontalScale(20),
        marginLeft : horizontalScale(10),
        backgroundColor : color.primary,
        borderRadius : moderateScale(50),
        width : horizontalScale(50),
        height : verticalScale(50),
        alignItems : 'center',
    }, 

    button : {
       marginTop  : verticalScale(10)
    }


})