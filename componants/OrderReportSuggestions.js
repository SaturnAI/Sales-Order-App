import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { style } from '../styles/OrderReportSuggestionStyle';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../assets/Colors/Colors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestionModal } from '../store/Slices/ChatScreenSlice';


const OrderReportSuggestions = () => {

    const dispatch = useDispatch()
    const suggestionModal = useSelector((state) => state.ChatScreenSlice.suggestionModal)

    return (

        <View >
            <Pressable onPress={async () => {
                await dispatch(setSuggestionModal())
            }}>
                <AntDesign name={suggestionModal ? 'downcircle' : 'upcircle'} size={24} color={color.primary} />
            </Pressable>
        </View>

    )
}

export default OrderReportSuggestions
