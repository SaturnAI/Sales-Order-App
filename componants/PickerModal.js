import React, { useState } from 'react'
import { View, Text, Modal, FlatList, Pressable, ToastAndroid } from 'react-native'
import { style } from '../styles/PickerModalStyle'
import { Card } from 'react-native-shadow-cards'
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { color } from '../assets/Colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectPickerCustomer, selectPickerItems, setModalVisible, selectBothPicker } from '../store/Slices/ChatScreenSlice';
import { RadioButton } from 'react-native-paper';


const PickerModal = ({ item }) => {

    const { context_required } = item;
    const { item_names, customer_name } = context_required;
    const dispatch = useDispatch()

    const [itemcust, setItemCust] = useState({
        item: '',
        customer: '',
        id: 0,
    });


    const [itemChecked, setItemChecked] = useState();
    const [custChecked, setCustChecked] = useState();
    const [dItemChecked, setDItemChecked] = useState();
    const [dCustChecked, setDCustChecked] = useState();
    const modalVisible = useSelector((state) => state.ChatScreenSlice.modalVisible);
    const idForCompChange = useSelector((state) => state.ChatScreenSlice.idForCompChange);

    const ICData = async (itemcust) => {
        await dispatch(selectBothPicker(itemcust))
        ToastAndroid.show("Solved Successfully", ToastAndroid.SHORT);
    }
    return (

        <Modal
            transparent={true}
            visible={modalVisible}

        >
            <Card style={style.CardContainer}  >
                <View style={style.InnerCardContainer} >
                    <Pressable onPress={() => dispatch(setModalVisible())}>
                        <Entypo name="cross" size={24} color={color.primary} />
                    </Pressable>
                    {(item_names && customer_name)
                        ?
                        <Pressable onPress={() => ICData(itemcust)}>
                            <Text style={style.PleaseSpecifyText}>Apply</Text>
                        </Pressable>
                        :
                        <Text style={style.PleaseSpecifyText}>Specify Item/Customer</Text>}
                </View>

                <View style={style.FlatListContainer}>
                    {(item_names && customer_name == null) ?
                        <FlatList
                            data={[...item_names]}
                            keyExtractor={(itemValue, key) => key}
                            showsVerticalScrollIndicator={false}
                            removeClippedSubviews={true}
                            maxToRenderPerBatch={5}
                            initialNumToRender={5}
                            renderItem={({ item, index }) => {

                                return (
                                    <View style={style.RenderCardContainer}>
                                        <View>
                                            <RadioButton value={index}
                                                status={itemChecked == index ? 'checked' : 'unchecked'}
                                                onPress={async () => {
                                                    await setItemChecked(index)
                                                    await dispatch(selectPickerItems({ item }))
                                                }} />
                                        </View>

                                        <View style={style.RenderCards}>
                                            <Pressable onPress={() => dispatch(selectPickerItems({ item }))}>
                                                <Text>{item}</Text>
                                            </Pressable>
                                            <View style={style.underLine} />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        :
                        (customer_name && item_names == null) ?
                            <FlatList
                                data={[...customer_name]}
                                keyExtractor={(itemValue, key) => key}
                                showsVerticalScrollIndicator={false}
                                removeClippedSubviews={true}
                                maxToRenderPerBatch={5}
                                initialNumToRender={5}
                                renderItem={({ item, index }) => {

                                    return (
                                        <View style={style.RenderCardContainer}>
                                            <View>
                                                <RadioButton value={index}
                                                    status={custChecked == index ? 'checked' : 'unchecked'}
                                                    onPress={async () => {
                                                        await setCustChecked(index)
                                                        await dispatch(selectPickerCustomer({ item }))
                                                    }} />
                                            </View>

                                            <View style={style.RenderCards}>
                                                <Pressable onPress={() => dispatch(selectPickerCustomer({ item }))}>
                                                    <Text>{item}</Text>
                                                </Pressable>
                                                <View style={style.underLine} />
                                            </View>
                                        </View>

                                    )
                                }}
                            />
                            :
                            (item_names && customer_name) ?

                                <View style={style.DoubleFlatListParantContainer}>
                                    <View style={style.DoubleListContainer}>
                                        <Text style={style.PleaseSpecifyText2}>Please Specify Item Name?</Text>
                                        <FlatList
                                            data={[...item_names]}
                                            keyExtractor={(itemValue, key) => key}
                                            showsVerticalScrollIndicator={false}
                                            removeClippedSubviews={true}
                                            maxToRenderPerBatch={5}
                                            initialNumToRender={5}
                                            renderItem={({ item, index }) => {

                                                return (
                                                    <View style={style.RenderCardContainer}>
                                                        <View>
                                                            <RadioButton value={index}
                                                                status={dItemChecked == index ? 'checked' : 'unchecked'}
                                                                onPress={async () => {
                                                                    await setDItemChecked(index)
                                                                    await setItemCust({ ...itemcust, item: item, id: idForCompChange })
                                                                }} />
                                                        </View>

                                                        <View style={style.RenderCards}>
                                                            <Pressable onPress={() => setItemCust({ ...itemcust, item: item, id: idForCompChange })}>
                                                                <Text>{item}</Text>
                                                            </Pressable>
                                                            <View style={style.underLine} />
                                                        </View>
                                                    </View>

                                                )
                                            }}
                                        />
                                    </View>
                                    <View style={style.DoubleListContainer}>
                                        <Text style={style.PleaseSpecifyText2}>Please Specify Customer Name?</Text>
                                        <FlatList
                                            data={[...customer_name]}
                                            keyExtractor={(itemValue, key) => key}
                                            showsVerticalScrollIndicator={false}
                                            removeClippedSubviews={true}
                                            maxToRenderPerBatch={5}
                                            initialNumToRender={5}
                                            renderItem={({ item, index }) => {

                                                return (
                                                    <View style={style.RenderCardContainer}>
                                                        <View>
                                                            <RadioButton value={index}
                                                                status={dCustChecked == index ? 'checked' : 'unchecked'}
                                                                onPress={async () => {
                                                                    await setDCustChecked(index)
                                                                    await setItemCust({ ...itemcust, customer: item, id: idForCompChange })
                                                                }} />
                                                        </View>

                                                        <View style={style.RenderCards}>
                                                            <Pressable onPress={() => setItemCust({ ...itemcust, customer: item, id: idForCompChange })}>
                                                                <Text>{item}</Text>
                                                            </Pressable>
                                                            <View style={style.underLine} />
                                                        </View>
                                                    </View>

                                                )
                                            }}
                                        />

                                    </View>
                                </View>


                                :

                                null

                    }


                </View>
            </Card>

        </Modal>

    )
}

export default PickerModal
