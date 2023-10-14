import React, { useState } from 'react'
import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { style } from '../styles/ChatTypingContainerStyle'
import { Feather } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setData, setQuery, setQueryArray } from '../store/Slices/ChatScreenSlice'
import OrderData from "../util/http";
import OrderReportSuggestions from './OrderReportSuggestions'

const ChatTypingContainer = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.ChatScreenSlice.isLoading);
    const queryString = useSelector((state) => state.ChatScreenSlice.queryString);
    const lastid = useSelector((state) => state.ChatScreenSlice.lastid);


    return (
        <View>

            <View style={style.ChatBarContainer} >

                <View style={style.TextInputContainer}>

                    <TextInput style={style.TextInput}
                        placeholder='Send Query'
                        cursorColor={color.Black}
                        onChangeText={(itemValue) => dispatch(setQuery(itemValue))}
                        editable={isLoading ? false : true}
                        value={queryString}
                    />
                </View>


                {isLoading ?

                    <View style={style.SendButtonLoader}>
                        <ActivityIndicator color={color.primary} />
                    </View>
                    :

                    <Pressable onPress={async () => {
                        await dispatch(setLoading())
                        await dispatch(setQueryArray(queryString))
                        const data = await OrderData(queryString, lastid)
                        await dispatch(setData(data))
                        await dispatch(setLoading())
                    }}>
                        <View style={style.SendButton}>
                            <Feather
                                style={style.button}
                                name="send"
                                size={24}
                                color={color.white}
                            />
                        </View>
                    </Pressable>}

            </View>

            <View style={style.OrderReportSuggestion} >
                <OrderReportSuggestions />
            </View>
        </View>
    )
}

export default ChatTypingContainer
