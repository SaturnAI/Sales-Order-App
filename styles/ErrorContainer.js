import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../Dimension";

const style = StyleSheet.create({
    ErrorContainer: {
        position: 'absolute',
        bottom: '50%',
        alignSelf: 'center',
    },

    OopsText :{
        fontFamily: 'Inter-Medium',
        fontSize : moderateScale(25),
        

    }
});

export default style;