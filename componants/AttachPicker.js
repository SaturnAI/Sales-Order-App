import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setAttachPicker } from '../store/Slices/PendingExpenseSlice'

const AttachPicker = (selectedValue, setSelectedValue) => {

  const dispatch = useDispatch();
  const AttachPickerValue =  useSelector((state) => state.PendingExpenseSlice.AttachPickerValue)

  return (
    <View>
       <Picker 
      selectedValue={AttachPickerValue}
      onValueChange={(itemValue) => dispatch(setAttachPicker(itemValue))}
       >
        <Picker.Item label='Rajinder Makhija' value='Rajinder Makhija' />
        <Picker.Item label='Kapil Jain' value='Kapil Jain' />
       </Picker>
    </View>
  )
}

export default AttachPicker
