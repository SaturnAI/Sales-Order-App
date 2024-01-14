import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import style from '../styles/EnquiryCardStyle';

const EnquiryCardComp = () => {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


    return (
        <SafeAreaView>
            <Card>
                <View>
                    <Text>Business Unit</Text> 
                </View>
            </Card>
        </SafeAreaView>
    )
}

export default EnquiryCardComp