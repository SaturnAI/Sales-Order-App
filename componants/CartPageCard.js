import React from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { style } from '../styles/CartPageCardStyle'
import { Feather, AntDesign } from '@expo/vector-icons';
import { color } from '../assets/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart, setIsCartCardDeleted, setIsOrderPosting, setOrderPosted, setIncreaseQuantity, setDecreaseQuantity } from '../store/Slices/CartPageSlice';
import { CartDelete, PostOrders } from '../util/http';
import { setCartRefresh } from '../store/Slices/ChatScreenSlice';

const CartPageCard = ({ Customer_Name, Customer_Number, Item_Name, Quantity, _id }) => {

    const dispatch = useDispatch()

    const email = useSelector((state) => state.LoginScreenSlice.email)

    const PostThisOrder = async (email, Customer_Name, Customer_Number, Item_Name, Quantity, _id) => {
        await dispatch(setIsOrderPosting())
        const data = await PostOrders(email, Customer_Name, Customer_Number, Item_Name, Quantity, _id)
        await dispatch(setCartRefresh())
        await dispatch(setIsOrderPosting())

    }

    const deleteCartCard = async (_id, email) => {
        await dispatch(setIsCartCardDeleted());
        await CartDelete(_id, email);
        await dispatch(setCartRefresh());
        await dispatch(setIsCartCardDeleted());
    }

    return (
        <SafeAreaView >
            <View style={style.OrderCardContainer}>
                <Card style={style.CardBody}>

                    <View style={style.deleteButton}>
                        <Pressable onPress={() => deleteCartCard(_id, email)}>
                            <AntDesign name="delete" size={20} color={color.primary} />
                        </Pressable>
                    </View>


                    <View style={style.container}>
                        <View   >
                            <Text style={style.containerText1}>Customer Number</Text>
                            <Text style={style.containerText2}>{Customer_Number}</Text>
                            <Text style={style.containerText1}>Item Name</Text>
                            <Text style={[style.remarks]}>{Item_Name}</Text>
                        </View>

                        <View >
                            <Text style={style.containerText1}>Customer Name</Text>
                            <Text style={[style.containerText2]}>{Customer_Name}</Text>

                            <View style={style.PlusMinusAndQuantText}>

                                <View>
                                    <Text style={style.containerText1}>Quantity</Text>
                                    <Text style={[style.remarks]}>{Quantity}</Text>
                                </View>

                                <View style={style.PlusMinusButtons}>
                                    <View style={style.PlusButtonContainer}>
                                        <Pressable onPress={() => dispatch(setIncreaseQuantity(_id))}>
                                            <AntDesign name="plus" size={25} color={color.primary} />
                                        </Pressable>
                                    </View>
                                    <View style={style.MinusButtonContainer}>
                                        <Pressable onPress={() => dispatch(setDecreaseQuantity(_id))}>
                                            <AntDesign name="minus" size={25} color={color.primary} />
                                        </Pressable>
                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>

                    <Pressable onPress={() => PostThisOrder(email, Customer_Name, Customer_Number, Item_Name, Quantity, _id)}>
                        <View style={style.PlaceOrderButton}>
                            <Text style={style.PlaceOrderButtonText}>Place Order</Text>
                        </View>
                    </Pressable>

                    <View style={style.BottomBar} />
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default CartPageCard
