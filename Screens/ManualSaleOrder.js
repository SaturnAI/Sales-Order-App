import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, Button } from 'react-native'
import { color } from '../assets/Colors/Colors'
import style from '../styles/ManualSaleOrderStyle'
import { verticalScale, moderateScale, horizontalScale } from '../Dimension'
import { Card } from 'react-native-shadow-cards';
import { FontAwesome } from '@expo/vector-icons'


const ManualSaleOrder = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />

      <ScrollView>
        <View style={style.backgroundContainer} />
        {/* <View style={style.HeaderTextContainer}>
          <Text style={style.HeaderText} >Manual Sale Order</Text>
        </View> */}

        <Card style={style.formContainer}>
          <View style={style.formContainerInside}>


            <View style={style.PickerComponent}>
              <Text style={style.Text}>Customer Number</Text>
              <View style={style.ComponantBackgroundRemarks}>
                <TextInput
                  style={style.TextInputRemarks}
                />
              </View>
            </View>


            <View style={style.PickerComponent}>
              <Text style={style.Text}>Customer Name</Text>
              <View style={style.ComponantBackgroundRemarks}>
                <TextInput
                  style={style.TextInputRemarks}
                  placeholder="John Snow"
                />
              </View>
            </View>

            <View style={style.PickerComponent}>
              <Text style={style.Text}>Item Name</Text>
              <View style={style.ComponantBackgroundRemarks}>
                <TextInput
                  style={style.TextInputRemarks}
                  placeholder="Chair/Lamp"
                />
              </View>
            </View>


            <View style={style.PickerComponent}>
              <Text style={style.Text}>Quantity</Text>
              <View style={style.ComponantBackgroundRemarks}>
                <TextInput
                  style={style.TextInputRemarks}
                  placeholder="Quantity"
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={style.ComponantBackgroundButton}>
              <Button style={style.Button} title="Post"
                color={color.primary} />
            </View>


          </View>
        </Card>

      </ScrollView>

    </SafeAreaView>
  )
}

export default ManualSaleOrder