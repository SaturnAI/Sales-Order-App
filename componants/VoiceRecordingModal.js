import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Modal, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/VoiceRecordingModalStyle'
import { FontAwesome5 } from '@expo/vector-icons'

const VoiceRecordingModal = () => {

    const SpeechRecording = useSelector((state) => state.ChatScreenSlice.SpeechRecording)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />
            <Modal
                transparent={true}
                animationType='fade'
                visible={SpeechRecording}>
                <View style={style.LoginLoaderContainer}  >
                    < FontAwesome5
                        name="microphone"
                        size={31}
                        color={color.white}
                    />
                    <View style={style.SpeakNowTextContainer}>
                        <Text style={style.SpeakNowText}>Speak Now</Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default VoiceRecordingModal
