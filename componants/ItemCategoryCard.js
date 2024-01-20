import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from '../styles/EnquiryScreenListModalStyle'
import { Card } from 'react-native-shadow-cards'
import { useDispatch } from 'react-redux'
import { setEnquiryFormData, setItemCategoryListModal, setItemCategorySelected } from '../store/Slices/EnquirySlice'

const ItemCategoryCard = ({ Code, Description }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={async () => {
            await dispatch(setEnquiryFormData({ type: "itemcategory", data: Code }))
            await dispatch(setItemCategorySelected())
            await dispatch(setItemCategoryListModal())
        }}>
            <Card style={style.Card}>
                <View>
                    <Text style={style.Text} >{Code}</Text>
                    <Text style={style.Text2}>{Description}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default ItemCategoryCard