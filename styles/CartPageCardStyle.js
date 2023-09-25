import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

    OrderCardContainer: {
        alignItems: 'center',
        paddingVertical: verticalScale(5),

    },

    CardBody: {

    },

    deleteButton : {
              alignSelf : 'flex-end',
              marginTop : verticalScale(10),
              position : 'absolute',
              right : horizontalScale(10),
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(20),
    },

    containerText1: {
        fontWeight: "400",
        fontSize: 16,
        marginBottom: 1,
        fontFamily: 'Inter-SemiBold'
    },

    containerText2: {
        fontWeight: "300",
        fontSize: moderateScale(16),
        marginBottom: 25,
        fontFamily: 'Inter-Regular',
        width: horizontalScale(130)
    },

    PlaceOrderButton: {
        marginHorizontal: horizontalScale(30),
        marginBottom: verticalScale(20),
        alignSelf: 'flex-end',
        backgroundColor: color.ButtonBlue,
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(10),

    },

   

    PlaceOrderButtonText: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(13),
        color: color.white,

    },

    OrderPlacedMessage: {
       backgroundColor : color.Green,
    },

    OrderPlacedMessageText: {
        alignSelf : 'flex-end',
        marginHorizontal : horizontalScale(20),
        color: color.white,
    },
});