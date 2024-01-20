import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from '../styles/EnquiryScreenListModalStyle'
import { Card } from 'react-native-shadow-cards'
import { useDispatch } from 'react-redux'
import { setEnquiryFormData, setListModal, setSaleLedBySelected, setsaleledbyName } from '../store/Slices/EnquirySlice'

const NameCard = ({ FirstName, LastName, No }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={async () => {
            await dispatch(setEnquiryFormData({ type: "salesledby", data: No }))
            await dispatch(setsaleledbyName(`${FirstName + " " + LastName}`))
            await dispatch(setSaleLedBySelected())
            await dispatch(setListModal())
        }}>
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