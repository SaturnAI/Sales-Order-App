import React from 'react'
import { View, SafeAreaView, Modal, ActivityIndicator, StatusBar } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { useSelector } from 'react-redux'
import { style } from '../styles/LoginScreenStyle'

const PostOrderLoading = () => {

    const isOrderPosting = useSelector((state) => state.CartPageSlice.isOrderPosting);
    const isCartCardDeleted = useSelector((state) => state.CartPageSlice.isCartCardDeleted);
    const isHistoryFetching = useSelector((state) => state.PlacedOrderSlice.isHistoryFetching);

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
                visible={isOrderPosting || isCartCardDeleted || isHistoryFetching}>
                <View style={style.LoginLoaderContainer}  >
                    <ActivityIndicator style={style.ActivityIndicator} size='large' color={color.primary} />
                </View>
            </Modal>
        </SafeAreaView>

    )
}

export default PostOrderLoading
