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
import { setListModal } from '../store/Slices/EnquirySlice';

const EnquiryScreenListModal = () => {

    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState('');
    const ListModal = useSelector((state) => state.EnquirySlice.ListModal)
    const ListModalItems = useSelector((state) => state.EnquirySlice.ListModalItems)


    return (
        <View>
            <Modal
                transparent={false}
                animationType='slide'
                visible={ListModal}
            >
                <View style={style.SearchBarContainer}>
                    <Searchbar
                        style={style.searchBar}
                        placeholder="Search"
                        placeholderTextColor={color.Black}
                        iconColor={color.Black}
                        cursorColor={color.Black}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                    <Entypo onPress={()=> dispatch(setListModal())} name="cross" size={28} color={color.primary} />
                </View>

                <FlatList
                    style={style.listStyle}
                    data={ListModalItems}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    renderItem={(item, index) => {
                        return (
                            <NameCard {...item?.item} key={index} />
                        )
                    }}
                />


            </Modal>
        </View >
    )
}

export default EnquiryScreenListModal