import React, { useState, useEffect } from 'react'
import { View, Alert, Text, Pressable, ActivityIndicator, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { style } from '../styles/ChatTypingContainerStyle'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setData, setQuery, setQueryArray, setSpeechRecording, setSpeechRecordingFalse, setChatSuggestion, setSuggestionVisible } from '../store/Slices/ChatScreenSlice'
import OrderData from "../util/http";
import OrderReportSuggestions from './OrderReportSuggestions'
import Voice from '@react-native-voice/voice';

const ChatTypingContainer = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.ChatScreenSlice.isLoading);
    const queryString = useSelector((state) => state.ChatScreenSlice.queryString);
    const lastid = useSelector((state) => state.ChatScreenSlice.lastid);



    const startSpeechToText = async () => {
        await dispatch(setSpeechRecording())
        await Voice.start('en-US')
        await dispatch(setSuggestionVisible())
    }

    const stopSpeechToText = async () => {
        await Voice.stop()
        await dispatch(setSpeechRecordingFalse())

    }


    useEffect(() => {
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            Voice.destroy().then(() => Voice.removeAllListeners)

        }


    }, [])


    const onSpeechResults = async (result) => {
        await dispatch(setChatSuggestion(result.value))
    }

    const onSpeechError = () => {
        Alert.alert('Not Understand Say it Again')
    }

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
                    (queryString.length > 0 ?

                        (<Pressable onPress={async () => {
                            await dispatch(setLoading())
                            await dispatch(setQueryArray(queryString))
                            const data = await OrderData(queryString, lastid)
                            await dispatch(setData(data))
                            await dispatch(setLoading())
                        }}>
                            <View style={style.SendButton}>

                                < Feather
                                    style={style.button}
                                    name="send"
                                    size={24}
                                    color={color.white}
                                />
                            </View>
                        </Pressable>)

                        :
                        (<TouchableOpacity
                            onLongPress={() => startSpeechToText()}
                            onPressOut={() => stopSpeechToText()}

                       
                        >
                            <View style={style.SendButton}>

                                < FontAwesome5
                                    style={style.button}
                                    name="microphone"
                                    size={21}
                                    color={color.white}
                                />
                            </View>
                        </TouchableOpacity>)


                    )


                }

            </View>

            <View style={style.OrderReportSuggestion} >
                <OrderReportSuggestions />
            </View>
        </View>
    )
}

export default ChatTypingContainer
