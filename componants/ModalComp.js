import React from 'react'
import { View, Modal, FlatList, Pressable, Text } from 'react-native'
import TransactionCardWithRemarks from './TransactionCardWithRemarks';
import { useDispatch, useSelector } from 'react-redux';
import { style } from '../styles/ModalCompStyle';
import { setModalVisible } from '../store/Slices/ExpenseFormSlice';
import GestureRecognizer from 'react-native-swipe-gestures';
const ModalComp = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.ExpenseFormSlice.data);

  const modalVisible = useSelector((state) => state.ExpenseFormSlice.modalVisible)


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


            <FlatList
              data={data}
              keyExtractor={(itemValue) => itemValue.id}
              removeClippedSubviews={true}
              maxToRenderPerBatch={5}
              initialNumToRender={10}
              renderItem={(item) => {
                return (
                  <View>
                    <TransactionCardWithRemarks item={item.item} />
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

export default ModalComp
