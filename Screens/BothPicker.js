import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectPicker } from '../store/Slices/ChatScreenSlice'

const BothPicker = ({ item }) => {

    const dispatch = useDispatch();

    const selectedValue = useSelector((state) => state.ChatScreenSlice.selectedValue);


    return (
        <View>
            <View>
                <Text style={style.PickerWarningText} >{`Please Specify\nItem_Name`}</Text>

                <Picker

                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {

                        dispatch(selectPicker({
                            type: 'SELECT_PICKER',
                            index: item.item.id,
                            itemValue: itemValue,

                        }));
                    }}
                >

                    <Picker.Item label="Select a Value" value="Select a Value" />
                    {item.item?.context_required?.item_names.map((val, index) => {
                        return <Picker.Item key={index} label={val} value={val} />

                    })}
                </Picker>
            </View>


            <View>
                <Text style={style.PickerWarningText} >{`Please Specify\nCustomer_Name`}</Text>

                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {

                        dispatch(selectPicker({
                            type: 'SELECT_PICKER',
                            index: item.item.id,
                            itemValue: itemValue,

                        }));
                    }}

                >
                    <Picker.Item label="Select a Value" value="Select a Value" />
                    {item.item?.context_required?.customer_names.map((val, index) => {
                        return <Picker.Item key={index} label={val} value={val} />
                    })}
                </Picker>
            </View>

        </View>
    )
}

export default BothPicker

const style = StyleSheet.create({
    PickerWarningText: {
        color: 'red',
        fontSize: 16,

    },
})