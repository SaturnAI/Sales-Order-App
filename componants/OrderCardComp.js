import React from 'react'
import { Text, View, Pressable, Button, Alert, ToastAndroid, } from 'react-native'
import { style } from '../styles/OrderCardCompStyle'
import { Card } from 'react-native-shadow-cards'
import { useSelector, useDispatch } from 'react-redux'
import { selectPicker, sendOrder, setModalVisible } from '../store/Slices/ChatScreenSlice'
import { AddToCart } from '../store/Slices/CartPageSlice'
import PickerModal from './PickerModal'

const OrderCardComp = ({item}) => {
  
  const dispatch = useDispatch();
  const selectedValue = useSelector((state) => state.ChatScreenSlice.selectedValue);
  const itemSelected = useSelector((state) => state.ChatScreenSlice.itemSelected);
 
  return (
    <Card style={style.CardBody}>

    

      <View style={style.CardContainer}>

        <View style={style.DataContainer1}>
          <View style={style.subDataContainer11}>
            <Text style={style.CardHeadingText}>Customer Name</Text>
            <Text style={style.AnswerText}>{item?.customer_name}</Text>
          </View>
          <View style={style.subDataContainer12} >
            <Text style={style.CardHeadingText}>Customer Number</Text>
            <Text style={style.AnswerText}>{item?.customer_no}</Text>
          </View>
        </View>

        <View style={style.DataContainer2}>
          <View style={style.subDataContainer21} >
            <Text style={style.CardHeadingText}>Item Name</Text>
            <Text style={style.AnswerText}>{item?.item_name}</Text>
          </View>
          <View style={style.subDataContainer22}>
            <Text style={style.CardHeadingText}>Quantity</Text>
            <Text style={style.AnswerText}>{item?.quantity}</Text>
          </View>
        </View>

      </View>




      {(item.context_required != null) ?

        <View style={style.WarningTextContainer}>
          <Text style={!item?.selected ? style.AlertText : style.SuccessText}>{!item?.selected ? "Alert!!" : "Solved"}</Text>

          <Pressable onPress={() => dispatch(setModalVisible())}>
            <Text style={!item?.selected ? style.ClickMeText : style.ClickMeTextSuccess}>{!item?.selected ? "See Problem" : "Change Selection"}</Text>
          </Pressable>

          <PickerModal {...item?.context_required} id={item?.item_id} />
        </View>
        :
        null
      }


      <View style={style.AddToCartButton}>
        <Pressable onPress={async () => {
          await dispatch(AddToCart(item))
          ToastAndroid.show('Added Successfully', ToastAndroid.SHORT);
        }}>
          <Text style={style.AddToCartText}>Add To Cart</Text>
        </Pressable>
      </View>

    </Card >
  )
}

export default OrderCardComp
