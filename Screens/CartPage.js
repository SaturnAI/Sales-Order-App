import React from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/CartPageStyle'
import { Card } from 'react-native-shadow-cards'
import { useSelector, useDispatch } from 'react-redux'
import CartPageCard from '../componants/CartPageCard'
import PostOrderLoading from '../componants/PostOrderLoading'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { History } from '../util/http'
import { setHistory, setIsHistoryFetching } from '../store/Slices/PlacedOrderSlice'

const CartPage = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const data = useSelector((state) => state.CartPageSlice.data)
    const email = useSelector((state) => state.LoginScreenSlice.email)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />

            <View style={style.backgroundContainer} />

            <View style={style.BackButton}>
                <Pressable onPress={() => navigation.navigate('Main Page')}>
                    <AntDesign name="back" size={24} color={color.white} />
                </Pressable>
            </View>

            <View style={style.headerTagAndButton}>
                <Text style={style.SaleOrderHeaderText}>Your Cart</Text>
            </View>

            <View style={style.CartItemList}>
                <FlatList
                    style={style.listStyle}
                    data={data}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    renderItem={(item) => {
                        return (
                            <CartPageCard {...item.item} />
                        );
                    }
                    }
                />

            </View>

            <View style={style.TotalItemCount}>
                <Card style={style.CardBody} >
                    <View style={style.CardBodyInnerView}>
                        <Text style={style.TotalItemText}>Total Items</Text>
                        <Text style={style.TotalItemCountNumber}>{data.length}</Text>
                    </View>
                    <Pressable onPress={async () => {
                        await dispatch(setIsHistoryFetching())
                        const data = await History(email)
                        await dispatch(setHistory(data))
                        await dispatch(setIsHistoryFetching())
                        await navigation.navigate('History')
                    }}>
                        <View style={style.CardBodyInnerView}>
                            <Text style={style.TotalItemText}>History</Text>
                            <FontAwesome name="history" size={24} color={color.white} />
                        </View>
                    </Pressable>
                </Card>
            </View>

            <PostOrderLoading />

        </SafeAreaView>
    )
}

export default CartPage
