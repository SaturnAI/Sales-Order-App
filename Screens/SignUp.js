import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, Button, TextInput, ToastAndroid } from 'react-native'
import { style } from '../styles/SignUpStyle'
import { color } from '../assets/Colors/Colors'
import { Card } from 'react-native-shadow-cards'
import { Ionicons } from '@expo/vector-icons'
import { SignUpUser } from '../util/http'
import { Alert } from 'react-native'
import LoginLoadingModal from '../componants/LoginLoadingModal'
import { useDispatch } from 'react-redux'
import { setLoading } from '../store/Slices/SignUpSlice'


const SignUp = () => {

    const dispatch = useDispatch();

    const [signUpCredentials, SetSignUpCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState(false);
    const [emailWarning, setEmailWarning] = useState(false);
    const [passvisible, setPassVisible] = useState(true);

    const handlePass = (pass, password) => {
        if (pass != password) {
            setWarning(true);
            SetSignUpCredentials({
                ...signUpCredentials,
                password: '',
            })
        } else {
            setWarning(false);
            SetSignUpCredentials({
                ...signUpCredentials,
                password: password,
            })
        }
    }

    const handleMail = async (mail) => {
        const EmailRegExp = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$");
        const val = await EmailRegExp.test(mail);
        if (val == true) {
            setEmailWarning(false);
            SetSignUpCredentials({
                ...signUpCredentials,
                email: mail,
            })

        } else {
            setEmailWarning(true);
            SetSignUpCredentials({
                ...signUpCredentials,
                email: '',
            })
        }
    }

    const handlePress = async (signUpCredentials) => {
        dispatch(setLoading())
        if (!warning && !emailWarning) {
        
            const data = await SignUpUser(signUpCredentials);

            if (data.is_successful) {
                ToastAndroid.show(data.message, ToastAndroid.SHORT)
            } else {
                Alert.alert(`Error : ${data.message}`)
            }
            dispatch(setLoading())
        } else {
            dispatch(setLoading())
            Alert.alert('Error : Enter All Fields Correctly');
        }
    }

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />
            <ScrollView>
                <View style={style.backgroundContainer} />
                <Text style={style.headerText}>Create New User</Text>


                <Card style={style.cardContainer}>
                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>First Name</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="UserName"
                            maxLength={20}
                            onChangeText={(name) => SetSignUpCredentials({
                                ...signUpCredentials,
                                firstName: name,
                            })}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Last Name</Text>

                        <TextInput
                            style={style.textInput}
                            placeholder="UserName"
                            maxLength={20}

                            onChangeText={(last) => SetSignUpCredentials({
                                ...signUpCredentials,
                                lastName: last,
                            })}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>E-Mail</Text>
                        <TextInput
                            style={!emailWarning ? style.textInput : style.textInputWarning}
                            placeholder="john@example.com"
                            maxLength={40}
                            onChangeText={(mail) => handleMail(mail)}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Password</Text>
                        <View style={style.TextInputContainer}>
                            <TextInput
                                secureTextEntry={passvisible}
                                style={style.textInput}
                                placeholder="must be strong"
                                value={password}

                                onChangeText={(password) => setPassword(password)}
                            />
                            <Ionicons onPress={() => setPassVisible(!passvisible)} style={{ marginLeft: -35, marginTop: 7 }} name={passvisible ? "eye" : "eye-off"} size={24} color={color.primary} />
                        </View>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Verify Password</Text>
                        <View style={style.TextInputContainer}>
                            <TextInput
                                secureTextEntry={passvisible}
                                style={!warning ? style.textInput : style.textInputWarning}
                                placeholder="must be same as above"

                                onChangeText={(pass) => handlePass(pass, password)}
                            />
                            <Ionicons onPress={() => setPassVisible(!passvisible)} style={{ marginLeft: -35, marginTop: 7 }} name={passvisible ? "eye" : "eye-off"} size={24} color={color.primary} />
                        </View>
                    </View>

                    <Button title='Add Member to in Your Organization' onPress={() => handlePress(signUpCredentials)} />
                </Card>

            </ScrollView>

            <LoginLoadingModal />

        </SafeAreaView>
    )
}

export default SignUp
