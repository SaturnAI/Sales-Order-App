import React from 'react'
import { Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/ReportedExpenseStyle'
import ReportedExpenseCard from '../componants/ReportedExpenseCard'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-shadow-cards'

const ReportedExpense = () => {

  const PendingApprovalData = useSelector((state) => state.ReportedExpenseSlice.PendingApprovalData);

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <View style={style.backgroundContainer} />
      <View style={style.container} >
        <Text style={style.pendingApprovalText}>Pending Approval</Text>
      </View>

      <View style={style.approvalCardList}>
        <FlatList
          data={PendingApprovalData}
          keyExtractor={(itemValue, index) => index}
          // extraData={}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
          renderItem={(item) => {

            return (
              <Card style={style.ReportExpenseCardStyle} >
                <ReportedExpenseCard {...item.item} />
              </Card>
            )
          }}
        />
      </View>

    </SafeAreaView>

  )
}

export default ReportedExpense
