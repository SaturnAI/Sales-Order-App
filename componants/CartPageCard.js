import React from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { style } from '../styles/CartPageCardStyle'
import { Feather, AntDesign } from '@expo/vector-icons';
import { color } from '../assets/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart, setIsOrderPosting, setOrderPosted } from '../store/Slices/CartPageSlice';
import { PostOrders } from '../util/http';

const CartPageCard = ({ customer_name, customer_no, id, item_name, quantity }) => {

    const dispatch = useDispatch()

    const username = useSelector((state) => state.LoginScreenSlice.username)
    const email = useSelector((state) => state.LoginScreenSlice.email)

    const PostThisOrder = async (username, email, customer_name, customer_no, item_name, quantity) => {
        await dispatch(setIsOrderPosting())
        const data = await PostOrders(username, email, customer_name, customer_no, item_name, quantity)
        await dispatch(setOrderPosted({id, customer_name, customer_no, item_name, quantity ,data}))
        await dispatch(setIsOrderPosting())
        
    }

    return (
        <SafeAreaView >
            <View style={style.OrderCardContainer}>
                <Card style={style.CardBody}>

                    <Pressable onPress={() => dispatch(RemoveFromCart(id))}>
                        <View style={style.deleteButton}>
                            <AntDesign name="delete" size={20} color={color.primary} />
                        </View>
                    </Pressable>


                    <View style={style.container}>
                        <View >
                            <Text style={style.containerText1}>Customer Number</Text>
                            <Text style={style.containerText2}>{customer_no}</Text>
                            <Text style={style.containerText1}>Item Name</Text>
                            <Text style={[style.containerText2, style.remarks]}>{item_name}</Text>
                        </View>
                        <View >
                            <Text style={style.containerText1}>Quantity</Text>
                            <Text style={[style.containerText2, style.remarks]}>{quantity}</Text>
                            <Text style={style.containerText1}>Customer Name</Text>
                            <Text style={[style.containerText2, style.remarks]}>{customer_name}</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => PostThisOrder(username, email, customer_name, customer_no, item_name, quantity, id)}>
                        <View style={style.PlaceOrderButton}>
                            <Text style={style.PlaceOrderButtonText}>Place Order</Text>
                        </View>
                    </Pressable>

                </Card>
            </View>
        </SafeAreaView>
    )
}

export default CartPageCard
