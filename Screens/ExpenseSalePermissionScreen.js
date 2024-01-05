import React from 'react'
import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native'
import { color } from '../assets/Colors/Colors'
import style from '../styles/ExpenseSalePermssionStyle'
import greetingTime from "greeting-time";
import { useSelector } from 'react-redux';
import Animated, { BounceInDown, FlipInYRight } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const ExpenseSalePermissionScreen = () => {

    const navigation = useNavigation();

    const username = useSelector((state) => state.LoginScreenSlice.username);
    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const AnimatedText = Animated.createAnimatedComponent(Text);
    const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);

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
                        Expense
                    </Button>
                </AnimatedOpacity>
                <AnimatedOpacity entering={BounceInDown.delay(500).duration(1000)}>
                    <Button mode="contained" onPress={() => {
                        navigation.navigate('Sale Order');
                     }}>Sale Order</Button>
                </AnimatedOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ExpenseSalePermissionScreen