import React, { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseForm from '../Screens/ExpenseForm';
import ExpenseList from '../Screens/ExpenseList';
import PendingExpense from '../Screens/PendingExpense';;
import ReportedExpense from '../Screens/ReportedExpense'
import Profile from '../Screens/Profile';
import { AntDesign, Feather, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { updateData, calculateAmount } from '../store/Slices/ExpenseFormSlice';
import { color } from '../assets/Colors/Colors';
import { ExpenseDataApi } from '../util/http';
import { getData } from '../store/Slices/PendingExpenseSlice';
import ChatScreen from '../Screens/ChatScreen';
import ManualSaleOrder from '../Screens/ManualSaleOrder';
import AllItemsScreen from '../Screens/AllItemsScreen';


const Tab = createBottomTabNavigator();

const TabLayout2 = () => {

  const dispatch = useDispatch();

  const data = async () => {
    const data = await ExpenseDataApi()
    dispatch(updateData(data.data));
    dispatch(calculateAmount(data.data));
    dispatch(getData(data.data))
  }

  useEffect(() => {
    data();
  }, []);


  return (

    <Tab.Navigator
      initialRouteName='Expense Form'    //initial route
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: {
          color: color.primary,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: color.primary,
        tabBarActiveBackgroundColor: color.lightBlue,
      })}
    >


      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <Entypo name="chat" size={24} color={color.primary} />
          );
        },
      }} name='Sale Buddy' component={ChatScreen} />




      <Tab.Screen options={{
        headerTransparent: true,
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontFamily: 'Inter-Medium',
          color: '#ffffff'
        },

        tabBarIcon: ({ focused }) => {
          return (
            <Entypo name="keyboard" size={24} color={color.primary} />
          );
        },
      }} name='Manual Sale Order' component={ManualSaleOrder} />


      <Tab.Screen
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontFamily: 'Inter-Medium',
            color: '#ffffff'
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name="list" size={24} color={color.primary} />
            );
          },
        }} name='Inventory' component={AllItemsScreen} />



      {/* <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <AntDesign name="user" size={24} color={color.primary} />
          );
        },
      }} name='Profile' component={Profile} /> */}

    </Tab.Navigator>
  )
}

export default TabLayout2;
