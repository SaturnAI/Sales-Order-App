import { horizontalScale, moderateScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    LoadingIndicator: {
        marginTop: verticalScale(300),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: horizontalScale(5),
    },

    LoaderSearchTextContainer: {
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),

    },

    LoaderSearchingText: {
        fontFamily: 'Inter-Medium',
        fontWeight: '600',
        fontSize: moderateScale(17),
        marginTop: horizontalScale(10),
    },

    LoaderTextContainer: {
        textAlign: 'center',
    },

    LoaderText: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(14),
        fontWeight: '400',
        textAlign :'center',
    }
})

export default style;