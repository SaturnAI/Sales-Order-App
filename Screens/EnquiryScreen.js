import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, ActivityIndicator, TextInput, Button, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { Card } from 'react-native-shadow-cards'
import style from '../styles/EnquiryScreenStyle'
import { Ionicons } from '@expo/vector-icons'
import { Picker, PickerIOS } from '@react-native-picker/picker'
import EnquiryScreenListModal from '../componants/EnquiryScreenListModal'
import { EnquiryApiGet } from '../util/http'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { setBranchCode, setBranchCodeLoader, setBusinessUnit, setBusinessUnitLoader } from '../store/Slices/EnquirySlice'
import { Searchbar } from 'react-native-paper'

const EnquiryScreen = () => {

    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState();

    const branchCode = useSelector((state) => state.EnquirySlice.branchCode);
    const branchCodeLoader = useSelector((state) => state.EnquirySlice.branchCodeLoader);
    const businessUnit = useSelector((state) => state.EnquirySlice.businessUnit);
    const businessUnitLoader = useSelector((state) => state.EnquirySlice.businessUnitLoader);

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />

            <ScrollView>
                <View style={style.backgroundContainer} />
                <Text style={style.headerText}>Enquiry</Text>


                <Card style={style.cardContainer}>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Branch Code</Text>

                        {
                            businessUnitLoader ?
                                <ActivityIndicator
                                    color={color.primary}
                                    size="large"
                                />
                                :
                                ((businessUnit.length <= 0) ? <TouchableOpacity onPress={async () => {
                                    await dispatch(setBusinessUnitLoader())
                                    const data = await EnquiryApiGet({ apiName: 'businessunit' })
                                    if (data.success == "true") {
                                        await dispatch(setBusinessUnit(data.data))
                                    }
                                    else {
                                        ToastAndroid.show(data.message, ToastAndroid.SHORT);
                                    }
                                    await dispatch(setBusinessUnitLoader())
                                }}>
                                    <Text style={style.SelectButton}>Get Data</Text>
                                </TouchableOpacity>
                                    :

                                    (<View>
                                        <Picker >
                                        {
                                            businessUnit.map((item, index) => {

                                                return (
                                                    <Picker.Item label={item.Branch_Name} value={item.Branch_Code} key={index} />
                                                )
                                            })
                                        }
                                    </Picker>
                                    </View>)
                                )
                        }
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Business Unit</Text>
                        {
                            branchCodeLoader ?
                                <ActivityIndicator
                                    color={color.primary}
                                    size="large"
                                />
                                :
                                ((branchCode.length <= 0) ? <TouchableOpacity onPress={async () => {
                                    await dispatch(setBranchCodeLoader())
                                    const data = await EnquiryApiGet({ apiName: 'branchcode' })
                                    if (data.success == "true") {
                                        await dispatch(setBranchCode(data.data))
                                    }
                                    else {
                                        ToastAndroid.show(data.message, ToastAndroid.SHORT);
                                    }
                                    await dispatch(setBranchCodeLoader())
                                }}>
                                    <Text style={style.SelectButton}>Get Data</Text>
                                </TouchableOpacity>
                                    :

                                    (<View>
                                        <Picker >
                                        {
                                            branchCode.map((item, index) => {

                                                return (
                                                    <Picker.Item label={item.Branch_Name} value={item.Branch_Code} key={index} />
                                                )
                                            })
                                        }
                                    </Picker>
                                    </View>)
                                )
                        }
                        {/* <Picker>
                            <Picker.Item label="HT Panel" value="HT Panel" />
                            <Picker.Item label="LT Panel" value="LT Panel" />
                            <Picker.Item label="Trading" value="Trading" />
                            <Picker.Item label="Services" value="Services" />
                        </Picker> */}
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Customer Name</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={40}
                        // onChangeText={(mail) => handleMail(mail)}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Sales Lead by</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={40}
                        // onChangeText={(mail) => handleMail(mail)}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Enquiry Type</Text>
                        <Picker>
                            <Picker.Item label="Budgetry" value="BUDGETRY" />
                            <Picker.Item label="Tendering" value="TENDERING" />
                            <Picker.Item label="Purchase" value="PURCHASE" />
                            <Picker.Item label="To Explore" value="TO EXPLORE" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Customer Type</Text>
                        <Picker>
                            <Picker.Item label="EPC" value="EPC" />
                            <Picker.Item label="End User" value="End User" />
                            <Picker.Item label="Panel Builder" value="Panel Builder" />
                            <Picker.Item label="Trader" value="Trader" />
                            <Picker.Item label="Utility" value="Utility" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Next Action Plan</Text>
                        <Picker>
                            <Picker.Item label="Proposal Team" value="PROPOSAL TEAM" />
                            <Picker.Item label="Verbal Offer Given" value="VERBAL OFFER GIVEN" />
                            <Picker.Item label="Visit Customer" value="VISIT CUSTOMER" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Make</Text>
                        <Picker>
                            <Picker.Item label="Coronet" value="CORONET" />
                            <Picker.Item label="Schneider" value="SCHNEIDER" />
                            <Picker.Item label="Siemens" value="SIEMENS" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Description</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={400}
                        // onChangeText={(mail) => handleMail(mail)}
                        />
                    </View>




                    {/* <View style={style.individualContainer}>
                        <Text style={style.textValue}>Customer Name</Text>
                        <View style={style.TextInputContainer}>
                            <TextInput
    
                                style={style.textInput}
                                placeholder="must be strong"
                                

                                // onChangeText={(password) => setPassword(password)}
                            />
                            <Ionicons  style={{ marginLeft: -35, marginTop: 7 }} name={"eye-off"} size={24} color={color.primary} />
                        </View>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Verify Password</Text>
                        <View style={style.TextInputContainer}>
                            <TextInput
                                
                                style={style.textInput }
                                placeholder="must be same as above"

                                // onChangeText={(pass) => handlePass(pass, password)}
                            />
                            <Ionicons  style={{ marginLeft: -35, marginTop: 7 }} name={"eye-off"} size={24} color={color.primary} />
                        </View>
                    </View> */}

                    <Button title='Create Enquiry' />
                </Card>

                <EnquiryScreenListModal />
            </ScrollView>



        </SafeAreaView>
    )
}

export default EnquiryScreen