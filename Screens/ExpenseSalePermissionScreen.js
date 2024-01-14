import React,{useEffect} from 'react'
import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native'
import { color } from '../assets/Colors/Colors'
import style from '../styles/ExpenseSalePermssionStyle'
import greetingTime from "greeting-time";
import { useDispatch, useSelector } from 'react-redux';
import Animated, { BounceInDown, FlipInYRight } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsEnquiry, setIsSaleOrder } from '../store/Slices/LoginScreenSlice';



const ExpenseSalePermissionScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const isEnquiryTab = useSelector((state)=> state.LoginScreenSlice.isEnquiryTab);
    const isSaleOrderTab = useSelector((state)=> state.LoginScreenSlice.isSaleOrderTab);

    useEffect(()=>{
        const setSaleAndEnquiry = async() => {
            const isSaleOrder = JSON.parse(await AsyncStorage.getItem("isSaleOrder"));
            const isEnquiry = JSON.parse(await AsyncStorage.getItem("isEnquiry"));
            await dispatch(setIsSaleOrder({isSaleOrder}));
            await dispatch(setIsEnquiry({isEnquiry}));
        }

        setSaleAndEnquiry();
    }, [])

    const username = useSelector((state) => state.LoginScreenSlice.username);
    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);

    // console.log(isEnquiryTab, isSaleOrderTab)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />

            <View style={style.backgroundContainer} />

            <View style={style.GreetContainer}>
                <AnimatedText entering={BounceInDown.duration(500)} style={style.Greeting}>Welcome to IAPPC!</AnimatedText>
                <AnimatedText entering={BounceInDown.duration(1000)} style={style.Username}>Sale Buddy</AnimatedText>
            </View>

            <View style={style.LoginImageContainer}>
                <AnimatedImage entering={FlipInYRight.duration(1000)} style={style.LoginImage} source={require('../assets/LoginImageGirl.png')} />
            </View>

            <View style={style.GreetContainer2}>
                <AnimatedText entering={BounceInDown.duration(1000)} style={style.Greeting2}>{greetingTime(new Date())}!</AnimatedText>
                <AnimatedText entering={BounceInDown.duration(1000)} style={style.Username2}>{username}</AnimatedText>

                <AnimatedText entering={BounceInDown.duration(1000)} style={style.AskingText}>Where you want to Go?</AnimatedText>
            </View>


            <View style={style.ButtonsContainer} >
                <AnimatedOpacity entering={BounceInDown.delay(500).duration(1000)}>
                    <Button mode="contained" onPress={() => {
                        navigation.navigate('Main Page');
                    }}
                    >
                        EXPENSE
                    </Button>
                </AnimatedOpacity>
                {isSaleOrderTab && <AnimatedOpacity entering={BounceInDown.delay(500).duration(1000)}>
                    <Button mode="contained" onPress={() => {
                        navigation.navigate('Sale Order');
                     }}>AI CHAT</Button>
                </AnimatedOpacity>}

                {isEnquiryTab && <AnimatedOpacity entering={BounceInDown.delay(500).duration(1000)}>
                    <Button mode="contained" onPress={() => {
                        navigation.navigate('Enquiry');
                     }}>Enquiry</Button>
                </AnimatedOpacity>}
            </View>

        </SafeAreaView>
    )
}

export default ExpenseSalePermissionScreen