import React from 'react'
import { View, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/AmountChartLoaderStyle'

const AmountChartLoader = () => {
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />
            <View style={style.ActivityIndicatorContainer}>
                <View style={ActivityIndicator}>
                    <ActivityIndicator size='large' color={color.primary} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AmountChartLoader
