import React from 'react'
import { ActivityIndicator, View, Text, SafeAreaView } from 'react-native'
import { color } from '../assets/Colors/Colors'
import style from '../styles/LoaderStyle'

const Loader = ({ query }) => {
    return (
        <SafeAreaView>
            <View style={style.LoadingIndicator}>
                <ActivityIndicator size='large' color={color.primary} />
                <View style={style.LoaderSearchTextContainer} >
                    <Text style={style.LoaderSearchingText}>Searching</Text>
                </View>
            </View>
            <View style={style.LoaderTextContainer}>
                <Text style={style.LoaderText}>{query}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Loader
