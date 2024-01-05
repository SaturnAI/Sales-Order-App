import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, verticalScale, moderateScale } from "../Dimension";

const style = StyleSheet.create({

    backgroundContainer: {
        height: verticalScale(100),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    GreetContainer: {
        marginTop: verticalScale(-70),
        alignSelf: 'center',
    },

    GreetContainer2: {
        marginTop: verticalScale(-30),
        marginBottom: verticalScale(50),
        alignSelf: 'center',
    },

    Greeting: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: color.white,
        alignSelf: 'center',

    },

    Username: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(22),
        fontWeight: '600',
        color: color.white,
        alignSelf: 'center',
    },

    Greeting2: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        fontWeight: '600',
        color: color.Black,
        alignSelf: 'center',

    },

    Username2: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(22),
        marginBottom : verticalScale(30),
        fontWeight: '600',
        color: color.Black,
        alignSelf: 'center',
    },

    AskingText : {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        fontWeight: '500',
        color: color.primary,
        alignSelf: 'center',
    },

    LoginImageContainer : {
            alignSelf : 'center',
    },

    LoginImage: {
          width : moderateScale(400),
          height : moderateScale(400),
    },

    ButtonsContainer: {
        flexDirection : 'row',
        justifyContent: 'space-around',
    },

})

export default style;