import React, { useState } from 'react'
import { SafeAreaView, Modal, StatusBar, View, Text, Pressable } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/SuggestionModalContainerStyle'
import { useSelector, useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import ChatTypingContainer from './ChatTypingContainer'
import { setRoute, setSuggestionModal } from '../store/Slices/ChatScreenSlice'
import { useNavigation } from '@react-navigation/native';

const SuggestionComponantModal = () => {
    
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const suggestionModal = useSelector((state) => state.ChatScreenSlice.suggestionModal)
    
    const [active, setActive] = useState({
        button1: true,
        button2: false,
    });

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />
            <Modal

                transparent={true}
                animationType='slide'
                visible={suggestionModal}>


                <View style={style.SuggestionModalContainer}>
                    <View style={style.ChatContainer}>
                        <ChatTypingContainer />
                    </View>
                    <View style={style.InsideContainer}>
                        <View style={style.AskMessageContainer}>
                            <Text style={style.MessageText}>Please Tell Me What You Want</Text>
                        </View>
                        <View style={style.ButtonContainer}>
                            <Pressable onPress={async () => {
                                await setActive({
                                    button1: true,
                                })
                                await dispatch(setRoute("Sale"));
                                await dispatch(setSuggestionModal())
                                
                            }}>
                                <View style={active.button1 == true ? style.ActiveButtonsTextContainer : style.ButtonsTextContainer}>
                                    <Text style={active.button1 == true ? style.ActiveButtonText : style.ButtonText}>Sale Order</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={async () => {
                                await setActive({
                                    button2: true,
                                })
                               await dispatch(setRoute("Report"))
                                await dispatch(setSuggestionModal())
                               
                                navigation.navigate('PDF')
                            }}>
                                <View style={active.button2 == true ? style.ActiveButtonsTextContainer : style.ButtonsTextContainer}>
                                    <Text style={active.button2 == true ? style.ActiveButtonText : style.ButtonText}>Reports</Text>
                                </View>
                            </Pressable>
                        </View>
                        

                    </View>
                </View>

            </Modal>

        </SafeAreaView>
    )
}

export default SuggestionComponantModal
