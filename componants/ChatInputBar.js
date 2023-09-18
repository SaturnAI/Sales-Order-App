import React from 'react'
import { View, Pressable, } from 'react-native'
import {style} from '../styles/ChatInputBarStyle'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'
import { Feather } from "@expo/vector-icons";

const ChatInputBar = () => {
  return (
       <View style={style.textInputField}>
        <View style={style.textInput}>
          <AutoGrowingTextInput
            style={style.textInputBoxDown}
            placeholder="Enter Your Sale Order Query..."
            // onChangeText={(itemValue) => dispatch(setQuery(itemValue))}
            // editable={opacity ? false : true}
            // value={query}
          />
        </View>

        <Pressable onPress={() => setOpacity(true)}>
          <View style={style.buttonContainer}>
            <Feather
              style={style.button}
              name="send"
              size={24}
              color="black"
            />
          </View>
        </Pressable>
      </View>
   
  )
}

export default ChatInputBar
