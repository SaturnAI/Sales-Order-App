import React, { useEffect } from 'react'
import { Text, View, Pressable, ToastAndroid, Alert } from 'react-native'
import { style } from '../styles/OrderCardCompStyle'
import { Card } from 'react-native-shadow-cards'
import { useDispatch, useSelector } from 'react-redux'
import { setCartRefresh, setIdForCompChange, setModalVisible } from '../store/Slices/ChatScreenSlice'
import { AddToCart, setIsAddedToCart } from '../store/Slices/CartPageSlice'
import PickerModal from './PickerModal'
import { CartInsert } from '../util/http'
import { SafeAreaView } from 'react-native-safe-area-context'

const OrderCardComp = ({ item }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.LoginScreenSlice.email)


  const AddToCart = async (item, email) => {

    await dispatch(setIsAddedToCart())
    const data = await CartInsert(item, email)
    // if (data.data.is_successfull == false) {
    //   Alert.alert('Error', " Maybe This Item Already Ordered")
    // }
    // else {
    //   await dispatch(setCartRefresh())
    // }
    await dispatch(setIsAddedToCart())

  }


  return (
    <SafeAreaView>
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

            <Pressable onPress={async () => {
              await dispatch(setIdForCompChange(item.item_id))
              await dispatch(setModalVisible())
            }}>
              <Text style={!item?.selected ? style.ClickMeText : style.ClickMeTextSuccess}>{!item?.selected ? "See Problem" : "Change"}</Text>
            </Pressable>

            <PickerModal item={item} />
          </View>
          :
          null
        }


        <View style={style.AddToCartButton}>
          <Pressable onPress={async () => {
            await AddToCart(item, email);
            await dispatch(setCartRefresh());
          }}>
            <Text style={style.AddToCartText}>Add To Cart</Text>
          </Pressable>
        </View>

      </Card >
    </SafeAreaView>
  )
}

export default OrderCardComp
