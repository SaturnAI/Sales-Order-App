import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { verticalScale, horizontalScale, moderateScale } from '../Dimension';
import { color } from '../assets/Colors/Colors';
import { style } from '../styles/TransactionCardStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setViewRemarks } from '../store/Slices/ExpenseFormSlice';

const TransactionCardWithRemarks = ({ item }) => {
    const { Amount, Date, ExpenseType, Remarks, id } = item;
    const dispatch = useDispatch();

    const viewRemarks = useSelector((state) => state.ExpenseFormSlice.viewRemarks)

    return (
        <View>
            {/* <Pressable onPress={() => dispatch(setViewRemarks())}> */}
            <View style={style.ExpenseCardsContainer}>
                <View style={style.ExpenseCardLeftElementsContainer}>
                    <View>
                        <Text style={style.ExpenseTypeText}>{ExpenseType}</Text>
                        <Text style={style.DateText}>{Date}</Text>
                    </View>
                </View>

                <View style={style.ExpenseCardRightElementsContainer}>
                    <FontAwesome name="rupee" size={moderateScale(19)} color={color.primary} />
                    <Text style={style.AmountText}>{Amount}</Text>
                </View>

            </View>
            {/* </Pressable> */}

            {/* {viewRemarks && */}
            <View style={style.RemarksContainer}>
                <Text style={style.RemarksText}>Remarks</Text>
                <Text style={style.RemarksName}>{Remarks}</Text>
            </View>
            {/* } */}

            <View style={style.CardLine} />
        </View>
    )
}

export default TransactionCardWithRemarks;
