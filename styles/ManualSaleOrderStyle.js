import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale, moderateScale } from '../Dimension';
import { color } from '../assets/Colors/Colors';


const style = StyleSheet.create({

    backgroundContainer: {
        height: verticalScale(80),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    HeaderTextContainer: {
        marginTop: verticalScale(-55),
    },

    HeaderText: {
        fontFamily: 'Inter-Regular',
        fontWeight: '700',
        fontSize: moderateScale(20),
        color: color.white,
        alignSelf: 'center',
    },

    formContainer: {
        marginBottom: verticalScale(20),
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(20),
        borderRadius: moderateScale(20),
    },

    formContainerInside: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(40),
    },

    PickerComponent: {
        alignContent: 'center',
        marginVertical: verticalScale(15),
    },

    Text: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(17),
        marginBottom: verticalScale(10),
    },

    ComponantBackgroundPicker: {
        borderWidth: 1,
        borderRadius: moderateScale(10),
        borderColor: color.primary,
    },

    ComponantBackgroundAmount: {
        borderWidth: 1,
        borderRadius: moderateScale(10),
        borderColor: color.primary,
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(20),
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: verticalScale(10),
    },

    TextInput: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        marginLeft: 5,
        borderRadius: 10,
        padding: 10,
        fontSize: moderateScale(18),
        marginTop: verticalScale(-10),
        fontFamily: 'Inter-Medium',

    },


    ComponantBackgroundDate: {
        borderWidth: 1,
        borderRadius: moderateScale(10),
        borderColor: color.primary,
    },

    DateText: {
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
        fontSize: moderateScale(16),
        fontFamily: 'Inter-Regular',
    },

    ComponantBackgroundRemarks: {
        borderWidth: 1,
        borderRadius: moderateScale(10),
        borderColor: color.primary,
    },

    TextInputRemarks: {
        paddingVertical: verticalScale(10),
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        width: '100%',
        marginLeft: horizontalScale(5),
        paddingLeft: horizontalScale(10),
        paddingRight: horizontalScale(10),
    },

    ComponantBackgroundButton: {
        marginTop: verticalScale(30),
    },

})

export default style;