import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../Dimension";
import { color } from "../assets/Colors/Colors";

const style = StyleSheet.create({

    searchBar: {
      marginVertical : verticalScale(5),
      marginHorizontal: horizontalScale(10),
      backgroundColor : color.Gray,
      color : color.Black,
    },


})

export default style;