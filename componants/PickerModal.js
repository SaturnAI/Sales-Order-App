import React from 'react'
import { View, Text, Modal, FlatList, Pressable } from 'react-native'
import { style } from '../styles/PickerModalStyle'
import { Card } from 'react-native-shadow-cards'
import { Entypo } from '@expo/vector-icons';
import { color } from '../assets/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectPickerItems, setModalVisible } from '../store/Slices/ChatScreenSlice';


const PickerModal = ({ item_names, customer_name, id }) => {
   
    const dispatch = useDispatch()

    const modalVisible = useSelector((state) => state.ChatScreenSlice.modalVisible)
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <Card style={style.ModalContainer} >
                    <View style={style.InnerCardContainer} >
                        <Text style={style.PleaseSpecifyText}>Please Specify?</Text>
                        <Pressable onPress={() => dispatch(setModalVisible())}>
                            <Entypo name="cross" size={24} color={color.primary} />
                        </Pressable>
                    </View>

                    <View style={style.FlatListContainer}>
                        <FlatList
                            data={[...item_names]}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={style.RenderCardContainer}>
                                        <View>
                                            <Text>{index}</Text>
                                        </View>

                                        <View style={style.RenderCards}>
                                            <Pressable onPress={()=> dispatch(selectPickerItems({id, item}))}>
                                                <Text>{item}</Text>
                                            </Pressable>
                                            <View style={style.underLine} />
                                        </View>
                                    </View>

                                )
                            }}
                        />
                    </View>
                </Card>

            </Modal>
        </View >
    )
}

export default PickerModal
