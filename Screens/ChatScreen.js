import React, { useCallback, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, Pressable, Alert } from 'react-native'
import { style } from '../styles/ChatScreenStyle'
import { color } from '../assets/Colors/Colors'
import ChatTypingContainer from '../componants/ChatTypingContainer'
import { Feather } from '@expo/vector-icons';
import NameAndStatusHeader from '../componants/NameAndStatusHeader'
import OrderCardComp from '../componants/OrderCardComp'
import { useDispatch, useSelector } from 'react-redux'
import QueryChatLabel from '../componants/QueryChatLabel'
import ErrorComp from '../componants/ErrorComp'
import { useNavigation } from '@react-navigation/native'
import AddToCartLoading from '../componants/AddToCartLoading'
import { AddToCart, setIsCartFetched } from '../store/Slices/CartPageSlice'
import { CartFetch } from '../util/http'
import OrderReportSuggestions from '../componants/OrderReportSuggestions'
import SuggestionComponantModal from '../componants/SuggestionComponantModal'
import VoiceRecordingModal from '../componants/VoiceRecordingModal'
import { Card } from 'react-native-shadow-cards'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { clearChatSuggestion, setQuery, setSuggestionVisible } from '../store/Slices/ChatScreenSlice'


const ChatScreen = () => {

  const dispatch = useDispatch()

  const navigation = useNavigation();
  const selectedData = useSelector((state) => state.ChatScreenSlice.selectedData)
  const data = useSelector((state) => state.CartPageSlice.data)
  const email = useSelector((state) => state.LoginScreenSlice.email);
  const CartRefresh = useSelector((state) => state.ChatScreenSlice.CartRefresh)
  const chatSuggestions = useSelector((state) => state.ChatScreenSlice.chatSuggestions)
  const suggestionVisible = useSelector((state) => state.ChatScreenSlice.suggestionVisible)

  const FetchCart = async (email) => {
    await dispatch(setIsCartFetched())
    const data = await CartFetch(email)
    await dispatch(AddToCart(data.data.user_cart))
    await dispatch(setIsCartFetched())
  }


  useEffect(() => {
    FetchCart(email)
  }, [CartRefresh])


  return (
    <SafeAreaView
      style={style.ParantContainer}

    >
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <View style={style.backgroundContainer} />

      <View style={style.HeaderTextContainer}>
        <NameAndStatusHeader />
        <View style={style.CartIconContainer}>
          <View style={style.CartIconContainerCount}>
            <Text style={style.CartIconContainerCountText}>{data.length}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Feather name="shopping-cart" size={25} color={color.white} />
          </Pressable>
        </View>
      </View>

      <View style={style.FlatListContainer}>


        <FlatList
          style={style.listStyle}
          data={selectedData}
          keyExtractor={(itemValue, key) => key}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          renderItem={({ item }) => {

            return (
              <View>
                <QueryChatLabel query={item.query} />
                {item.sales != null
                  ?
                  <FlatList
                    style={style.listStyle}
                    data={item.sales}
                    keyExtractor={(itemValue, key) => key}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    renderItem={(item) => {

                      return (
                        <View>
                          <OrderCardComp {...item} />
                        </View>
                      );
                    }
                    }
                  />
                  :
                  <ErrorComp ErrorName={item.message} />
                }
              </View>
            );
          }
          }
        />

      </View>




      <View style={style.ChatBar} >

        {suggestionVisible ? <View style={style.Suggestions}>
          {chatSuggestions.map((item, index) => {
            return (
              <Card key={index} style={style.Card}>
                <TouchableOpacity onPress={async () => {
                  await dispatch(setQuery(item))
                  await dispatch(setSuggestionVisible())
                  await dispatch(clearChatSuggestion())
                }}>
                  <Text style={style.SuggestionsText}>{item}</Text>
                </TouchableOpacity>
              </Card>
            )
          })}
        </View> :
          null}


        <ChatTypingContainer />
      </View>

      <AddToCartLoading />

      <SuggestionComponantModal />
      <VoiceRecordingModal />

    </SafeAreaView>
  )
}

export default ChatScreen
