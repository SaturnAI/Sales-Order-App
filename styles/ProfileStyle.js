import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { moderateScale, verticalScale, horizontalScale } from "../Dimension";

export const style = StyleSheet.create({

    backgroundContainer: {
        height: verticalScale(140),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    userInfoContainer: {
        alignItems: 'center',
        marginTop: moderateScale(-50),
        marginBottom: moderateScale(10),
    },

    UsernameText: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(20),
        marginTop: moderateScale(3),
        color: color.primary,
        textAlign: 'center',
        marginBottom: moderateScale(10),
        width: horizontalScale(200),
    },

    ProfileImage: {
        backgroundColor: color.white,
        height: verticalScale(100),
        width: horizontalScale(100),
        borderRadius: moderateScale(50),
        alignSelf: 'center',
    },

    ProfileButtonsContainer: {

    },

    ButtonContainer: {
        flexDirection: 'row',
        paddingHorizontal:horizontalScale(20),
        borderRadius: moderateScale(10),
        height: verticalScale(50),
        marginTop: verticalScale(20),
    },

    ButtonText:{
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(19),
        marginLeft: horizontalScale(15),
    }
})