// import "react-native-gesture-handler";

// import React from "react";
// import { View , Text} from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import TabLayout from "./TabLayout";
// import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, FontAwesome5 } from "@expo/vector-icons";
// import ChatScreen from "../Screens/ChatScreen";
// import { useDispatch, useSelector } from "react-redux";
// import SignUp from "../Screens/SignUp";
// import { color } from "../assets/Colors/Colors";
// import CartPage from "../Screens/CartPage";
// import ManualSaleOrder from "../Screens/ManualSaleOrder";
// import AllItemsScreen from "../Screens/AllItemsScreen";

// const Drawer = createDrawerNavigator();

// const DrawerLayout = () => {

//   const role = useSelector((state) => state.LoginScreenSlice.role)
//   const access = useSelector((state) => state.LoginScreenSlice.access)
//   const dispatch = useDispatch();

//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="IAPPC"
//         component={TabLayout}
//         options={{
//           headerShown: false,
//           drawerIcon: ({ }) => <AntDesign name="home" size={24} color={color.primary} />,
//         }}
//       />

//       <Drawer.Screen
//         name="Sale Order AI Chat"
//         component={ChatScreen}
//         options={{
//           headerShown: false,
//           drawerIcon: ({ }) => <Ionicons name="chatbox-ellipses-outline" size={24} color={color.primary} />,
//         }}
//       />

//       <Drawer.Screen
//         name="Manual Order"
//         component={ManualSaleOrder}
//         options={{
//           headerShown: false,
//           drawerIcon: ({ }) => <FontAwesome name="pencil-square-o" size={24} color={color.primary} />,
//         }}
//       />
      
//       <Drawer.Screen
//         name="All Items"
//         component={AllItemsScreen}
//         options={{
//           headerShown: false,
//           drawerIcon: ({ }) => <FontAwesome5 name="boxes" size={24} color={color.primary} />,
//         }}
//       />

//       {role == 'customer_admin'?
//         <Drawer.Screen
//           name="Create User"
//           component={SignUp}
//           options={{
//             headerShown: false,
//             drawerIcon: ({ }) => <AntDesign name="user" size={24} color={color.primary} />,
//           }}
//         />
//         :
//         null
//       }


      

//     </Drawer.Navigator>
//   );
// };

// export default DrawerLayout;
