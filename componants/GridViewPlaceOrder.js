import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Table, Rows, Row } from 'react-native-table-component'
import { useSelector } from 'react-redux'
import { color } from '../assets/Colors/Colors'

const GridViewPlaceOrder = () => {

  const history = useSelector((state) => state.PlacedOrderSlice.history)

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row textStyle={{ textAlign: 'center', fontWeight: '500' }} style={{ height: 40, backgroundColor:color.lightBlue}} data={['Customer Number', 'Customer Name', 'Item Name', 'Quantity']} />
        </Table>

        <ScrollView>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            {
              history.map((item, index) => {
                return (<Row key={index} textStyle={{ textAlign: 'center', fontWeight: '400' }} style={{ height: 40, backgroundColor: '#E7E6E1' }} data={[[item.Customer_Name], [item.Customer_Number], [item.Item_Name], [item.Quantity]]} />)
              })
            }
          </Table>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default GridViewPlaceOrder
