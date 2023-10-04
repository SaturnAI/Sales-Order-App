import React from 'react'
import { View, SafeAreaView, Modal, ActivityIndicator, StatusBar } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { useSelector } from 'react-redux'
import { style } from '../styles/LoginScreenStyle'

const AddToCartLoading = () => {

    const isAddedToCart = useSelector((state) => state.CartPageSlice.isAddedToCart);

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
                visible={isAddedToCart}>
                <View style={style.LoginLoaderContainer}  >
                    <ActivityIndicator style={style.ActivityIndicator} size='large' color={color.primary} />
                </View>
            </Modal>
        </SafeAreaView>

    )
}

export default AddToCartLoading
