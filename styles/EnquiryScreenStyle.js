import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { verticalScale, horizontalScale, moderateScale } from "../Dimension";

const style = StyleSheet.create({
    backgroundContainer: {
        height: verticalScale(80),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    headerText: {
        alignSelf: 'center',
        fontSize: moderateScale(22),
        fontWeight: '400',
        fontFamily: 'Inter-SemiBold',
        color: color.white,
        marginTop: verticalScale(-50),
    },

    cardContainer: {
        justifyContent: "center",
        backgroundColor: color.white,
        padding: 20,
        borderRadius: moderateScale(20),
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(60),
        marginBottom: verticalScale(30),
    },



    SelectButton: {
        color: color.primary,
        fontWeight: "600",
        fontSize: moderateScale(17),
        marginVertical: verticalScale(10),
        marginHorizontal: horizontalScale(20),
    },

    PickerBorder:{
          borderWidth : moderateScale(1),
          borderColor : color.Black,
          borderRadius: moderateScale(10)
    },

    PickerBorder2:{
          borderWidth : moderateScale(1),
          borderColor : color.Black,
          borderRadius: moderateScale(10),
          padding: moderateScale(12),
    },

    LongListText: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(14),
        marginLeft: horizontalScale(10),

    },

    individualContainer: {
        marginBottom: verticalScale(30),
    },

    textValue: {
        fontSize: 18,
        fontWeight: "800",
        marginBottom: 10,
        fontFamily: 'Inter-Medium',
    
    },

    Mendatory:{
        color : color.Red,
    },

    TextInputContainer: {
        flexDirection: "row",
    },

    textInput: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        borderColor: color.Black,
        borderWidth: 1,
        marginLeft: 5,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
    },

    textInput2: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        borderColor: color.Black,
        borderWidth: 1,
        marginLeft: 2,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
    },

    textInputWarning: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        borderColor: color.Red,
        borderWidth: 1,
        marginLeft: 5,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
    },

    CountryContainer: {
        backgroundColor: color.BlueSecondry,
        width: horizontalScale(150),
        borderRadius: moderateScale(20),

    }
})


export default style;