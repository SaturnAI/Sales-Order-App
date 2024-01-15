import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

const style = StyleSheet.create({

  SearchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(20),
  },

  searchBar: {
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(10),
    backgroundColor: color.Gray,
    color: color.Black,
    width: "90%",
  },

  Card: {
    marginVertical: verticalScale(5),
    padding: moderateScale(20),
    borderBottomWidth: 3,
    borderBottomColor: color.primary,
    alignSelf: 'center',
  },

  Text: {
    fontWeight: '600',
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(18),
  },

  Text2: {
    fontSize: moderateScale(12),
  }

})

export default style;