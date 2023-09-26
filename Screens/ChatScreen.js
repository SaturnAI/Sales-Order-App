import React from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native'
import { style } from '../styles/ChatScreenStyle'
import { color } from '../assets/Colors/Colors'
import ChatTypingContainer from '../componants/ChatTypingContainer'
import { Feather } from '@expo/vector-icons';
import NameAndStatusHeader from '../componants/NameAndStatusHeader'
import OrderCardComp from '../componants/OrderCardComp'
import { useSelector } from 'react-redux'
import QueryChatLabel from '../componants/QueryChatLabel'
import ErrorComp from '../componants/ErrorComp'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {

  const navigation = useNavigation();
  const selectedData = useSelector((state) => state.ChatScreenSlice.selectedData)
  const data = useSelector((state) => state.CartPageSlice.data)

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
          <Pressable onPress={()=>navigation.navigate('Cart')}>
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
            console.log(item)
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
        <ChatTypingContainer />
      </View>

    </SafeAreaView>
  )
}

export default ChatScreen
