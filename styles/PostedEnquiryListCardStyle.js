import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

export const style = StyleSheet.create({

    Container: {
        // marginBottom: verticalScale(100)
    },

    OrderCardContainer: {
        alignItems: 'center',
        paddingVertical: verticalScale(5),
    },

    CardBody: {

    },

    deleteButton: {
        alignSelf: 'flex-end',
        marginTop: verticalScale(10),
        position: 'absolute',
        right: horizontalScale(10),
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(50),
    },

    PlusMinusAndQuantText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },



    containerText1: {
        fontFamily: 'Inter-SemiBold',
        fontSize: moderateScale(16),
        marginBottom: 1,
    },

    containerText2: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(15),
        marginBottom: verticalScale(20),
        width: horizontalScale(100)

    },

    PlusMinusButtons: {
        flexDirection: 'column',
    },

    PlusButtonContainer: {
        marginBottom: verticalScale(20)
    },

    MinusButtonContainer: {

    },

    remarks: {
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(15),
        marginBottom: verticalScale(1),
        width: horizontalScale(100)
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
        backgroundColor: color.Green,
    },

    OrderPlacedMessageText: {
        alignSelf: 'flex-end',
        marginHorizontal: horizontalScale(20),
        color: color.white,
    },

    BottomBar: {
        borderWidth: moderateScale(2),
        borderColor: color.primary,
        borderRadius: moderateScale(20)
    },

    BottomItem: {
        flexDirection: 'column',

    },

    ItemName: {
        marginTop: verticalScale(20),
    }
});