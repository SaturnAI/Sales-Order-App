import React from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, Modal, Pressable } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/CartPageStyle'
import { Card } from 'react-native-shadow-cards'
import { useSelector } from 'react-redux'
import CartPageCard from '../componants/CartPageCard'
import PostOrderLoading from '../componants/PostOrderLoading'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const CartPage = () => {
    const navigation = useNavigation();
    const data = useSelector((state) => state.CartPageSlice.data)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />

            <View style={style.backgroundContainer} />

            <View style={style.BackButton}>
                <Pressable onPress={() =>navigation.navigate('Main Page')}>
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
                </Card>
            </View>

            <PostOrderLoading />

        </SafeAreaView>
    )
}

export default CartPage
