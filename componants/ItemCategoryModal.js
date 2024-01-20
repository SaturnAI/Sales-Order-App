import React, { useState } from 'react'
import { View, Text, ActivityIndicator, Modal, FlatList, TouchableHighlight } from 'react-native'
import style from '../styles/EnquiryScreenListModalStyle'
import { color } from '../assets/Colors/Colors'
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import NameCard from './NameCard';
import { Entypo } from '@expo/vector-icons';
import { findItemCategory, setItemCategoryListModal, setItemCategorySearchQuery } from '../store/Slices/EnquirySlice';
import ItemCategoryCard from './ItemCategoryCard';

const ItemCategoryModal = () => {

    const dispatch = useDispatch()
    const ItemCategoryModal = useSelector((state) => state.EnquirySlice.ItemCategoryModal)
    const ItemCategoryModalItem = useSelector((state) => state.EnquirySlice.ItemCategoryModalItem)
    const ItemCatSearchQuery = useSelector((state) => state.EnquirySlice.ItemCatSearchQuery)


    return (
        <View>
            <Modal
                transparent={false}
                animationType='slide'
                visible={ItemCategoryModal}
            >
                <View style={style.SearchBarContainer}>
                    <Searchbar
                        style={style.searchBar}
                        placeholder="Search"

                        theme={{ colors: { primary: color.Black, secondary: color.Black, tertiary: color.Black, onSurfaceVariant: color.Black } }}
                        placeholderTextColor={color.Black}
                        iconColor={color.Black}
                        cursorColor={color.Black}
                        onChangeText={async (item) => {
                            await dispatch(setItemCategorySearchQuery(item))
                            await dispatch(findItemCategory(item))
                        }}
                        value={ItemCatSearchQuery}
                    />
                    <Entypo onPress={() => dispatch(setItemCategoryListModal())} name="cross" size={28} color={color.primary} />
                </View>

                <FlatList
                    style={style.listStyle}
                    data={ItemCategoryModalItem}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    renderItem={(item, index) => {
                        return (
                            <ItemCategoryCard {...item?.item} key={index} />
                        )
                    }}
                />


            </Modal>
        </View >
    )
}

export default ItemCategoryModal