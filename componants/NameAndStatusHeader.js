import React from 'react'
import { View, Text, Image } from 'react-native'
import { style } from '../styles/NameAndHeaderStyle'


const NameAndStatusHeader = () => {
    return (
        <View>
            <View style={style.NameAndImageContainer}>
                <View >
                    <Image
                        style={style.Image}
                        source={require('../assets/logo.png')}
                    />
                </View>

                <View style={style.NameAndStatusContainer}>
                    <Text style={style.HeaderText}>Sale Buddy</Text>
                    <Text style={style.OnlineStatusText}>Online</Text>
                </View>
            </View>
        </View>
    )
}

export default NameAndStatusHeader
