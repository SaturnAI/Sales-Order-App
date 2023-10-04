import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, Pressable, StatusBar, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/PlacedOrderScreenStyle'
import PostOrderLoading from '../componants/PostOrderLoading'
import PlacedOrderItemCard from '../componants/PlacedOrderItemCard'
import { useSelector } from 'react-redux'

const PlacedOrdersScreen = () => {

    const navigation = useNavigation();

    const history = useSelector((state) => state.PlacedOrderSlice.history)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />

            <View style={style.backgroundContainer} />

            <View style={style.BackButton}>
                <Pressable onPress={() => navigation.navigate('Cart')}>
                    <AntDesign name="back" size={24} color={color.white} />
                </Pressable>
            </View>

            <View style={style.headerTagAndButton}>
                <Text style={style.SaleOrderHeaderText}>History</Text>
            </View>

            <View style={style.CartItemList}>
                <FlatList
                    style={style.listStyle}
                    data={history}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    renderItem={(item) => {
                       
                        return (
                           <PlacedOrderItemCard {...item.item} />
                        );
                    }
                    }
                />

            </View>



            <PostOrderLoading />

        </SafeAreaView>
    )
}

export default PlacedOrdersScreen
