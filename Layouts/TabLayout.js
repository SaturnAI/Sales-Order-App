import React, { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseForm from '../Screens/ExpenseForm';
import ExpenseList from '../Screens/ExpenseList';
import PendingExpense from '../Screens/PendingExpense';;
import ReportedExpense from '../Screens/ReportedExpense'
import Profile from '../Screens/Profile';
import { AntDesign, Feather, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/Config';

import { useDispatch } from 'react-redux';
import { updateData, calculateAmount } from '../store/Slices/ExpenseFormSlice';
import { color } from '../assets/Colors/Colors';
import OrderData from '../util/http';


const Tab = createBottomTabNavigator();

const TabLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    return onValue(ref(db, '/expense'), querySnapShot => {
      let data = querySnapShot.val() || {};
      dispatch(updateData(data));
      dispatch(calculateAmount(data));
      
    });
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
        }} name='ExpenseForm' component={ExpenseForm} />



      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <MaterialIcons name="pending-actions" size={24} color={color.primary} />
          );
        },
      }} name='Reported Expense' component={ReportedExpense} />




      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <AntDesign name="user" size={24} color={color.primary} />
          );
        },
      }} name='Profile' component={Profile} />

    </Tab.Navigator>
  )
}

export default TabLayout
