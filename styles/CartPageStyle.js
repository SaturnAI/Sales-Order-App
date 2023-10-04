import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { horizontalScale, verticalScale, moderateScale } from "../Dimension";

export const style = StyleSheet.create({
    backgroundContainer: {
        height: verticalScale(60),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    BackButton:{
        position: 'absolute',
        left: 25,
        top: 15,
    },

    TotalItemCount: {
        alignSelf: 'center',
        marginVertical: verticalScale(5),
        
    },

    CardBody: {
        backgroundColor: color.BlueSecondry,
        flexDirection : 'row',
        justifyContent : 'space-around',
    },

    CardBodyInnerView: {
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    TotalItemText: {
        color: color.white,
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
        marginRight: horizontalScale(20)
    },

    TotalItemCountNumber: {
        color: color.white,
        fontFamily: 'Inter-Regular',
        fontSize: moderateScale(18),
    },



    headerTagAndButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    SaleOrderHeaderText: {
        fontFamily: 'Inter-Medium',
        fontSize: moderateScale(20),
        color: color.white,
        alignSelf: 'center',
        marginTop: verticalScale(-60),
        marginLeft: horizontalScale(140)
    },


    CartItemList: {
         height : verticalScale(700)
    }

});