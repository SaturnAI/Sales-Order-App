import React from 'react'
import { View, SafeAreaView, Modal, ActivityIndicator, StatusBar } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { useSelector } from 'react-redux'
import { style } from '../styles/LoginScreenStyle'

const LoginLoadingModal = () => {

    const isLoading = useSelector((state) => state.LoginScreenSlice.isLoading);
    const Loading = useSelector((state)=>state.SignUpSlice.Loading);

    return (
        <SafeAreaView>
            
            <Modal
                transparent={true}
                animationType='slide'
                visible={isLoading || Loading}>
                <View style={style.LoginLoaderContainer}  >
                    <ActivityIndicator style={style.ActivityIndicator} size='large' color={color.primary} />
                </View>
            </Modal>
        </SafeAreaView>

    )
}

export default LoginLoadingModal
