import React, { useState } from 'react'
import { View, Text, ActivityIndicator, Modal, FlatList } from 'react-native'
import style from '../styles/EnquiryScreenListModalStyle'
import { color } from '../assets/Colors/Colors'
import { Searchbar } from 'react-native-paper';


const EnquiryScreenListModal = () => {

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View>
            <Modal
                transparent={false}
                animationType='slide'
                visible={false}
            >
                <Searchbar
                    style={style.searchBar}
                    placeholder="Search"
                    placeholderTextColor={color.Black}
                    iconColor={color.Black}
                    cursorColor={color.Black}
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />

                <FlatList
                    style={style.listStyle}
                    data={[1,1]}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    
                />


            </Modal>
        </View>
    )
}

export default EnquiryScreenListModal