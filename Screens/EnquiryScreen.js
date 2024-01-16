import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, ActivityIndicator, TextInput, Button, Pressable, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { Card } from 'react-native-shadow-cards'
import style from '../styles/EnquiryScreenStyle'
import { Ionicons } from '@expo/vector-icons'
import { Picker, PickerIOS } from '@react-native-picker/picker'
import EnquiryScreenListModal from '../componants/EnquiryScreenListModal'
import { EnquiryApiGet, EnquiryApiPost } from '../util/http'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { setBranchCode, setBranchCodeLoader, setBusinessUnit, setBusinessUnitLoader, setEnquiryFormData, setEnquiryType, setEnquiryTypeLoader, setListModal, setListModalItem, setSalesLeadBy, setSalesLeadByLoader, setSubmitLoader } from '../store/Slices/EnquirySlice'
import { Searchbar, Snackbar } from 'react-native-paper'

const EnquiryScreen = () => {

    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState();

    const branchCode = useSelector((state) => state.EnquirySlice.branchCode);
    const branchCodeLoader = useSelector((state) => state.EnquirySlice.branchCodeLoader);
    const businessUnit = useSelector((state) => state.EnquirySlice.businessUnit);
    const businessUnitLoader = useSelector((state) => state.EnquirySlice.businessUnitLoader);
    const salesleadby = useSelector((state) => state.EnquirySlice.salesleadby);
    const salesleadbyLoader = useSelector((state) => state.EnquirySlice.salesleadbyLoader);
    const enquiryType = useSelector((state) => state.EnquirySlice.enquiryType);
    const enquiryTypeLoader = useSelector((state) => state.EnquirySlice.enquiryTypeLoader)
    const BranchCodeData = useSelector((state) => state.EnquirySlice.BranchCodeData)
    const BusinessUnitData = useSelector((state) => state.EnquirySlice.BusinessUnitData)
    const CustomerNameData = useSelector((state) => state.EnquirySlice.CustomerNameData)
    const SalesLeadByData = useSelector((state) => state.EnquirySlice.SalesLeadByData)
    const EnquiryTypeData = useSelector((state) => state.EnquirySlice.EnquiryTypeData)
    const CustomerTypeData = useSelector((state) => state.EnquirySlice.CustomerTypeData)
    const NextActionPlanData = useSelector((state) => state.EnquirySlice.NextActionPlanData)
    const Make = useSelector((state) => state.EnquirySlice.Make)
    const Description = useSelector((state) => state.EnquirySlice.Description)
    const salesLedBySelected = useSelector((state) => state.EnquirySlice.salesLedBySelected)
    const submitLoader = useSelector((state) => state.EnquirySlice.submitLoader)


    const Data = useSelector((state) => state.EnquirySlice)
    const [enqCode, setEnqCode] = useState("")


    const [snack, setSnack] = useState(false);


    const hideSnack = () => {
        setSnack(true);
        setTimeout(() => {
            setSnack(false);
        }, 2000)
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
                <Text style={style.headerText}>Enquiry</Text>


                <Card style={style.cardContainer}>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Branch Code</Text>

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
                                        <Picker
                                            selectedValue={BranchCodeData}
                                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "branchcode", data: item }))}
                                        >
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
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Business Unit</Text>

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
                                        <Picker
                                            selectedValue={BusinessUnitData}
                                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "businessunit", data: item }))}
                                        >
                                            {
                                                businessUnit.map((item, index) => {

                                                    return (
                                                        <Picker.Item label={item.Name} value={item.Code} key={index} />
                                                    )
                                                })
                                            }
                                        </Picker>
                                    </View>)
                                )
                        }

                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Customer Name</Text>
                        <TextInput
                            style={style.textInput}
                            maxLength={40}
                            value={CustomerNameData}
                            onChangeText={(name) => dispatch(setEnquiryFormData({ type: "customername", data: name }))}
                        />
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Sales Lead by</Text>

                        {
                            salesleadbyLoader ?
                                <ActivityIndicator
                                    color={color.primary}
                                    size="large"
                                />
                                :
                                ((salesleadby.length <= 0)
                                    ?
                                    (<TouchableOpacity onPress={async () => {
                                        await dispatch(setSalesLeadByLoader())
                                        const data = await EnquiryApiGet({ apiName: 'salesledby' })
                                        if (data.success == "true") {
                                            if (data.data.length > 10) {
                                                await dispatch(setListModal())
                                                await dispatch(setListModalItem(data.data))
                                            }
                                            await dispatch(setSalesLeadBy(data.data))

                                        }
                                        else {
                                            ToastAndroid.show(data.message, ToastAndroid.SHORT);
                                        }
                                        await dispatch(setSalesLeadByLoader())
                                    }}>
                                        <Text style={style.SelectButton}>Get Data</Text>
                                    </TouchableOpacity>)
                                    :

                                    <TouchableOpacity onPress={() => dispatch(setListModal())}>
                                        <Text style={style.LongListText}>{!salesLedBySelected ? "Large List Tap to View" : SalesLeadByData}</Text>
                                    </TouchableOpacity>

                                )
                        }
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Enquiry Type</Text>
                        {
                            enquiryTypeLoader ?
                                <ActivityIndicator
                                    color={color.primary}
                                    size="large"
                                />
                                :
                                ((enquiryType.length <= 0) ? <TouchableOpacity onPress={async () => {
                                    await dispatch(setEnquiryTypeLoader())
                                    const data = await EnquiryApiGet({ apiName: 'enquirytype' })
                                    if (data.success == "true") {
                                        await dispatch(setEnquiryType(data.data))
                                    }
                                    else {
                                        ToastAndroid.show(data.message, ToastAndroid.SHORT);
                                    }
                                    await dispatch(setEnquiryTypeLoader())
                                }}>
                                    <Text style={style.SelectButton}>Get Data</Text>
                                </TouchableOpacity>
                                    :

                                    (<View>
                                        <Picker
                                            selectedValue={EnquiryTypeData}
                                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "enquirytype", data: item }))}
                                        >
                                            {
                                                enquiryType.map((item, index) => {

                                                    return (
                                                        <Picker.Item label={item.Name} value={item.Code} key={index} />
                                                    )
                                                })
                                            }
                                        </Picker>
                                    </View>)
                                )
                        }

                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Customer Type</Text>
                        <Picker
                            selectedValue={CustomerTypeData}
                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "customertype", data: item }))}
                        >
                            <Picker.Item label="EPC" value="EPC" />
                            <Picker.Item label="End User" value="End User" />
                            <Picker.Item label="Panel Builder" value="Panel Builder" />
                            <Picker.Item label="Trader" value="Trader" />
                            <Picker.Item label="Utility" value="Utility" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Next Action Plan</Text>
                        <Picker
                            selectedValue={NextActionPlanData}
                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "nextactionplan", data: item }))}
                        >
                            <Picker.Item label="Proposal Team" value="PROPOSAL TEAM" />
                            <Picker.Item label="Verbal Offer Given" value="VERBAL OFFER GIVEN" />
                            <Picker.Item label="Visit Customer" value="VISIT CUSTOMER" />
                        </Picker>
                    </View>

                    <View style={style.individualContainer}>
                        <Text style={style.textValue}>Make</Text>
                        <Picker
                            selectedValue={Make}
                            onValueChange={(item) => dispatch(setEnquiryFormData({ type: "make", data: item }))}
                        >
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
                            onChangeText={(mail) => dispatch(setEnquiryFormData({ type: "description", data: mail }))}
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

                    {submitLoader
                        ?
                        <ActivityIndicator />
                        :
                        <Button title='Create Enquiry' onPress={async () => {
                            await dispatch(setSubmitLoader());
                            const data = await EnquiryApiPost(BranchCodeData, BusinessUnitData, CustomerNameData, SalesLeadByData, EnquiryTypeData, CustomerTypeData, NextActionPlanData, Make, Description);
                            if (data.success == "true") {
                                await setEnqCode(data.data.No)
                                await hideSnack();
                            }
                           else {
                                ToastAndroid.show("Missing Data", ToastAndroid.SHORT)
                            }
                            await dispatch(setSubmitLoader());
                        }} />
                    }



                </Card>
                <Snackbar
                    style={{ marginBottom: 30 }}
                    visible={snack}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                            setSnack(false)
                        },
                    }}>
                    {`Enquiry Code  ${enqCode}  `}
                </Snackbar>
                <EnquiryScreenListModal />
            </ScrollView>



        </SafeAreaView>
    )
}

export default EnquiryScreen