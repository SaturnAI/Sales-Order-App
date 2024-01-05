import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import LoginScreen from './LoginScreen'
import { style } from '../styles/ProfileStyle'
import { color } from '../assets/Colors/Colors'
import { useSelector } from 'react-redux'
import { Ionicons, MaterialIcons, AntDesign, Foundation } from '@expo/vector-icons'
import { Logout } from '../util/http'


const Profile = () => {
  const navigation = useNavigation();

  const role = useSelector((state) => state.LoginScreenSlice.role)
  const username = useSelector((state) => state.LoginScreenSlice.username);

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        color={color.white}
      />
      <View style={style.backgroundContainer} />

      <View style={style.userInfoContainer}>
        <Image style={style.ProfileImage} source={require('../assets/logo.png')} />
        <Text style={style.UsernameText}>{username}</Text>
      </View>

      <View style={style.ProfileButtonsContainer}>
        <TouchableOpacity>
          <View style={style.ButtonContainer}>
            <Ionicons name="person" size={24} color={color.primary} />
            <Text style={style.ButtonText}>Account Info</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.ButtonContainer}>
            <MaterialIcons name="security" size={24} color={color.primary} />
            <Text style={style.ButtonText}>Login & Security</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.ButtonContainer}>
            <AntDesign name="customerservice" size={24} color={color.primary} />
            <Text style={style.ButtonText} >Help/Support</Text>
          </View>
        </TouchableOpacity>

        {role == 'customer_admin' ?
          <TouchableOpacity>
            <View style={style.ButtonContainer}>
              <AntDesign name="customerservice" size={24} color={color.primary} />
              <Text style={style.ButtonText} >Create User</Text>
            </View>
          </TouchableOpacity>
          :
          null
        }

        <TouchableOpacity onPress={async () => {
          const data = await Logout();
          if (data.success == true) {
            navigation.popToTop();
            navigation.replace("Budget App")
          }
        }}>
          <View style={style.ButtonContainer}>
            <Foundation name="power" size={24} color={color.primary} />
            <Text style={style.ButtonText} >LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Profile
