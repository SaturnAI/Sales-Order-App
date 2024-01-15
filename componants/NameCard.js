import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from '../styles/EnquiryScreenListModalStyle'
import { Card } from 'react-native-shadow-cards'

const NameCard = ({ FirstName, LastName, No }) => {
    return (
        <TouchableOpacity>
            <Card style={style.Card}>
                <View>
                    <Text style={style.Text} >{FirstName + " " + LastName}</Text>
                    <Text style={style.Text2}>{No}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default NameCard