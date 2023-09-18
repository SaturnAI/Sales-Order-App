import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, Button, Pressable } from 'react-native'
import { style } from '../styles/SignUpStyle'
import { color } from '../assets/Colors/Colors'
import { Card } from 'react-native-shadow-cards'
import CountryPicker from 'react-native-country-picker-modal'

const SignUp = () => {


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
                        <Text style={style.textValue}>Name</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="UserName"
                            maxLength={20}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>EMail</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="john@example.com"
                            maxLength={20}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Password</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="Must be strong"
                            maxLength={20}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Verify Password</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="Must be Same as above"
                            maxLength={20}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Address</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={100}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>City</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={100}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Country</Text>

                        <View style={style.textInput}>
                            <CountryPicker withFilter={true}
                                withModal={true}
                                preferredCountries="IN"
                                withCallingCode={true}
                            />
                        </View>


                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Pincode</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={6}
                            keyboardType='numeric'
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Role</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={20}
                        />
                    </View>

                    <Button title='Add Member in Your Family' />
                </Card>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
