import React from 'react'
import { View, Text } from 'react-native';
import style from '../styles/ErrorContainer';

const ErrorComp = ({ErrorName}) => {
  return (
    <View style={style.ErrorContainer}>
      <Text style={style.OopsText}>Oops...</Text>
      <Text>{ErrorName}</Text>
    </View>
  )
}

export default ErrorComp;
