import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { style } from '../styles/ChatScreenStyle'
import { Card } from 'react-native-shadow-cards'
import { Picker } from '@react-native-picker/picker'
import { useSelector, useDispatch } from 'react-redux'
import { selectPicker, sendOrder } from '../store/Slices/ChatScreenSlice'
import { AddToCart } from '../store/Slices/CartPageSlice'
import BothPicker from '../Screens/BothPicker'

const OrderCardComp = ({ item }) => {
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.ChatScreenSlice.selectedValue);
  const itemSelected = useSelector((state) => state.ChatScreenSlice.itemSelected);


  return (
    <Card style={style.chatContainerResponse}>
      <View style={style.responseContainer}>
        <View style={style.container}>

          <View >
            <Text style={style.containerText1}>Customer Number</Text>
            <Text style={style.containerText2}>{item?.item?.customer_no == null ? 'Not Found' : item?.item?.customer_no}</Text>
            <Text style={style.containerText1}>Item Name</Text>
            <Text style={[style.containerText2, style.remarks]}>{item?.item?.item_name}</Text>
          </View>
          <View >
            <Text style={style.containerText1}>Quantity</Text>
            <Text style={[style.containerText2, style.remarks]}>{item?.item?.quantity}</Text>
            <Text style={style.containerText1}>Customer Name</Text>
            <Text style={[style.containerText2, style.remarks]}>{item?.item?.customer_name}</Text>
          </View>
        </View>

        {item?.item?.context_required && (


          <View >


            {Object.keys(item?.item?.context_required).length == 1 && <Text style={!itemSelected ? style.PickerWarningText : style.PickerSelectedText}>{`WARNING!! \nPlease Specify \n${Object.keys(item?.item?.context_required)}`}</Text>}

            <View>

              {Object.keys(item?.item?.context_required).length > 1
                ?
                <BothPicker item={item}

                />
                :

                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => {

                    dispatch(selectPicker({
                      type: 'SELECT_PICKER',
                      index: item.item.id,
                      itemValue: itemValue,

                    }));
                  }}
                >

                  <Picker.Item label="Select a Value" value="Select a Value" />


                  {
                    item.item.context_required?.item_names ? (item?.item?.context_required?.item_names.map((val, index) => {
                      return <Picker.Item key={index} label={val} value={val} />

                    })) :
                      (item.item?.context_required?.customer_name.map((val, index) => {
                        return <Picker.Item key={index} label={val} value={val} />
                      }))
                  }

                </Picker>
              }
            </View>

          </View>)}


        {!item?.item?.showButton &&

          <View style={style.OrderButtonContainer}>
            <Pressable onPress={() => dispatch(AddToCart(item.item))}>
              <View style={style.Orderbutton} >
                <Text style={style.OrderButtonText}>Add to Cart</Text>
              </View>
            </Pressable>
          </View>

        }



      </View>
    </Card>
  )
}

export default OrderCardComp
