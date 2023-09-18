import React from 'react'
import { Picker } from '@react-native-picker/picker'

 const PickerComp = ({selectedValue, setPicker}) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) =>
        setPicker(itemValue)
      }
    >
      <Picker.Item label="Food" value="Food" />
      <Picker.Item label="Travel" value="Travel" />
      <Picker.Item label="Hotel" value="Hotel" />
      <Picker.Item label="Commute" value="Commute" />
      <Picker.Item label="Other" value="Other" />
    </Picker>
  )
}

 

export {PickerComp};