import React, { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseForm from '../Screens/ExpenseForm';
import ExpenseList from '../Screens/ExpenseList';
import PendingExpense from '../Screens/PendingExpense';;
import ReportedExpense from '../Screens/ReportedExpense'
import Profile from '../Screens/Profile';
import { AntDesign, Feather, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { updateData, calculateAmount } from '../store/Slices/ExpenseFormSlice';
import { color } from '../assets/Colors/Colors';
import { ExpenseDataApi } from '../util/http';
import { getData } from '../store/Slices/PendingExpenseSlice';


const Tab = createBottomTabNavigator();

const TabLayout = () => {

  const dispatch = useDispatch();

  const NavigateProfile = useSelector((state)=>state.SignUpSlice.NavigateProfile) 

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
      initialRouteName={NavigateProfile ? 'Profile' : 'Expense List'}    //initial route
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
            <Entypo name="home" size={24} color={color.primary} />
          );
        },
      }} name='Expense List' component={ExpenseList} />




      <Tab.Screen options={{
        headerTransparent: true,
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontFamily: 'Inter-Medium',
          color: '#ffffff'
        },

        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons name="stats-chart" size={24} color={color.primary} />
          );
        },
      }} name='Pending Expense' component={PendingExpense} />


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
              <AntDesign name="pluscircle" size={24} color={color.primary} />
            );
          },
        }} name='Add Expense' component={ExpenseForm} />



      <Tab.Screen options={{
        headerTransparent: true,
        headerTitleAlign: "center",

        headerTitleStyle: {
          fontFamily: 'Inter-Medium',
          color: '#ffffff'
        },

        tabBarIcon: ({ focused }) => {
          return (
            <MaterialIcons name="pending-actions" size={24} color={color.primary} />
          );
        },
      }} name='Reported Expense' component={ReportedExpense} />




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

export default TabLayout
