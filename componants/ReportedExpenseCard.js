import React from 'react'
import { View, Text, Button } from 'react-native'
import { style } from '../styles/ReportedExpenseCardStyle'
import { moderateScale } from '../Dimension'
import { FontAwesome } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ReportedExpenseCard = ({ Amount, Date, ExpenseType, Remarks, id, selected }) => {

  return (
    <View>

      <View style={style.ExpenseCardContainer}>
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

      <View style={style.RemarksContainer}>
        <Text style={style.RemarksText}>Remarks</Text>
        <Text style={style.RemarksName}>{Remarks}</Text>
      </View>

      <View style={style.ButtonsContainer}>
        <TouchableOpacity style={style.shadowProp} >
            <Text style={style.ButtonReject}>Reject</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text style={style.ButtonApprove} >Approve</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ReportedExpenseCard
