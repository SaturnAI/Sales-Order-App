import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text , Button} from 'react-native'
import LoginScreen from './LoginScreen'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>User Profile</Text>
      <Button title='LogOut' onPress={()=> navigation.replace("Budget App")} />
    </View>
  )
}

export default Profile
