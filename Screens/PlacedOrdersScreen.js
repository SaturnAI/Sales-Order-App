import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, Pressable, StatusBar, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/PlacedOrderScreenStyle'
import PostOrderLoading from '../componants/PostOrderLoading'
import ListViewPlacedOrder from '../componants/ListViewPlacedOrder'
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleGrid } from '../store/Slices/PlacedOrderSlice'

const PlacedOrdersScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const toogleGrid = useSelector((state) => state.PlacedOrderSlice.toggleGrid)

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


            {
                toogleGrid ?
                    <View style={style.ListGridIcons}>
                        <Pressable onPress={() => dispatch(setToggleGrid())}>
                            <Entypo name="list" size={35} color={color.white} />
                        </Pressable>
                    </View>
                    :
                    <View style={style.ListGridIcons}>
                        <Pressable onPress={() => dispatch(setToggleGrid())}>
                            <Entypo name="grid" size={35} color={color.white} />
                        </Pressable>
                    </View>
            }


            <ListViewPlacedOrder />




            <PostOrderLoading />

        </SafeAreaView>
    )
}

export default PlacedOrdersScreen
