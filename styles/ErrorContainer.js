import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";

const style = StyleSheet.create({

    cardContainer:{
       marginTop : verticalScale(10),
       padding: 10,
       marginBottom: verticalScale(10),
    },

    ErrorContainer: {
       
    },

    OopsText :{
        fontFamily: 'Inter-Medium',
        fontSize : moderateScale(20),
    },

    ErrorText: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(14),
    }
});

export default style;