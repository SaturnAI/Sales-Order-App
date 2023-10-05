import React from 'react'
import { View, FlatList } from 'react-native'
import { style } from '../styles/PlacedOrderScreenStyle'
import PlacedOrderItemCard from './PlacedOrderItemCard'
import { useSelector } from 'react-redux'

const ListViewPlacedOrder = () => {

    const history = useSelector((state) => state.PlacedOrderSlice.history)

    return (
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
    )
}

export default ListViewPlacedOrder
