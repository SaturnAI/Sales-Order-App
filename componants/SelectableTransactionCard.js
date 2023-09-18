import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { verticalScale, horizontalScale, moderateScale } from '../Dimension';
import { color } from '../assets/Colors/Colors';
import { style } from '../styles/SelectableTransactionCardStyle';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';
import { cardSelect } from '../store/Slices/PendingExpenseSlice';

const SelectableTransactionCard = ({ item }) => {
    const dispatch = useDispatch();
    const { Amount, Date, ExpenseType, Remarks, id } = item;
    return (
        <View>
            <View style={style.ExpenseCardsContainer}>

                <View style={style.ExpenseCardLeftElementsContainer}>

                    <View>
                        <BouncyCheckbox
                            size={22}
                            fillColor="#7B68EE"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#7B68EE" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            style={style.bounceCheckbox}
                            isChecked={item.selected || false}
                            onPress={() => dispatch(cardSelect(item))}
                        />
                    </View>
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

            <View style={style.RemarksContainer}>
                <Text style={style.RemarksText}>Remarks</Text>
                <Text style={style.RemarksName}>{Remarks}</Text>
            </View>
            {/* } */}

            <View style={style.CardLine} />

        </View>
    )
}

export default SelectableTransactionCard;
