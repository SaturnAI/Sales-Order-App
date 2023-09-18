import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { verticalScale, horizontalScale, moderateScale } from '../Dimension';
import { color } from '../assets/Colors/Colors';
import { style } from '../styles/TransactionCardStyle';

const TransactionCard = ({ item }) => {
    const { Amount, Date, ExpenseType, Remarks, id } = item;
    return (
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
    )
}

export default TransactionCard
