import React, {useState} from 'react'
import { View, Modal, FlatList, Pressable, Text } from 'react-native'
import TransactionCardWithRemarks from './TransactionCardWithRemarks';
import { useDispatch, useSelector } from 'react-redux';
import { style } from '../styles/ModelCompPendingStyle';
import { setModalVisible, setSelectedData } from '../store/Slices/PendingExpenseSlice';
import GestureRecognizer from 'react-native-swipe-gestures';
import SelectableTransactionCard from './SelectableTransactionCard';
import AttachPicker from './AttachPicker';


const ModalCompPending = () => {
    const dispatch = useDispatch();

    const[selectedValue, setSelectedValue] = useState('Rajinder Makhija')

    const data = useSelector((state) => state.ExpenseFormSlice.data);

    const modalVisible = useSelector((state) => state.PendingExpenseSlice.modalVisible)


    return (
        <GestureRecognizer
            onSwipeDown={() => dispatch(setModalVisible())}
        >
            <View >

                <Modal
                    swipeDirection="down"
                    onSwipeCompleted={() => dispatch(setModalVisible())}
                    animationType='slide'
                    visible={modalVisible}
                    onRequestClose={() => {
                        dispatch(setModalVisible());
                    }}
                    transparent={true}
                >


                    <View style={style.ModalComponent} >

                        <Pressable onPress={() => dispatch(setModalVisible())}>
                            <View style={style.CloseContainer}>
                                <Text style={style.CloseText}>Touch to Close</Text>
                                <View style={style.HeaderBar} />
                            </View>
                        </Pressable>

                        <View style={style.AttachToContainer}>
                            <Pressable onPress={()=> dispatch(setSelectedData())}>
                                <Text style={style.AttachToText}>Attach</Text>
                            </Pressable>

                            <AttachPicker style={style.AttachPicker} selectedValue={selectedValue}  setSelectedValue={setSelectedValue} />

                        </View>


                        <FlatList
                            data={data}
                            keyExtractor={(itemValue) => itemValue.id}
                            removeClippedSubviews={true}
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            renderItem={(item) => {
                                return (
                                    <View>
                                        <SelectableTransactionCard item={item.item} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </Modal>
            </View >
        </GestureRecognizer>
    )
}

export default ModalCompPending
