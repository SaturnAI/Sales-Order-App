import React from 'react'
import { View, Text } from 'react-native';
import style from '../styles/ErrorContainer';
import { Card } from 'react-native-shadow-cards';

const ErrorComp = ({ ErrorName }) => {
  return (
    <Card style={style.cardContainer}>
      <View style={style.ErrorContainer} >
        <Text style={style.OopsText}>Oops...</Text>
        <Text style={style.ErrorText}>{ErrorName}</Text>
      </View>
    </Card>
  )
}

export default ErrorComp;
