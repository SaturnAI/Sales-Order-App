import { StyleSheet } from "react-native";
import { color } from "../assets/Colors/Colors";
import { verticalScale, horizontalScale, moderateScale } from "../Dimension";

export const style = StyleSheet.create({

    Container: {
        marginBottom: verticalScale(100)
    },

    SearchIcon: {

    },

    backgroundContainer: {
        height: verticalScale(100),
        backgroundColor: color.primary,
        borderBottomLeftRadius: moderateScale(50),
        borderBottomRightRadius: moderateScale(50),
    },

    headerParentContainer: {
        width: "100%",
        flexDirection: 'row',
        marginTop: verticalScale(-70),
        marginBottom: verticalScale(25),
        justifyContent: 'space-around'
    },

    HeaderContainer: {

        alignSelf: "center",
    },

    headerText: {
        alignSelf: 'center',
        fontSize: moderateScale(22),
        fontWeight: '400',
        fontFamily: 'Inter-SemiBold',
        color: color.white,

    },

    SearchBarConatainer: {
        flexDirection: 'row',
        marginTop: verticalScale(-70),
        marginHorizontal: horizontalScale(10),
        marginBottom: verticalScale(10),
    },

    searchBar: {
        backgroundColor: color.Gray,
        color: color.Black,
        // height: verticalScale(55),
        // alignSelf: 'center',
        width: "90%",
    },

    CloseButton: {
        marginTop: verticalScale(10),
    }
})
