import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../styles/QueryChatLabelStyle'
import { Card } from 'react-native-shadow-cards'

const QueryChatLabel = ({ query }) => {
    return (
        <Card style={style.CardBody}>
            <View style={style.QueryChatContainer} >
                <Text style={style.QueryText}>{query}</Text>
            </View>
        </Card>
    )
}

export default QueryChatLabel
