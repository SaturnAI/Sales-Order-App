import React from 'react'
import { Text, View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/PostedEnquiryListCardStyle'
import { Card } from 'react-native-shadow-cards'
import { useNavigation } from '@react-navigation/native'

const PostedEnquiryListCard = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={style.Container} >
            <View style={style.OrderCardContainer}>
                <Card style={style.CardBody}>

                    <View style={style.deleteButton}>
                        {/* <Pressable onPress={() => deleteCartCard(_id, email)}> */}
                        <TouchableOpacity >
                            <AntDesign name="delete" size={20} color={color.primary} />
                        </TouchableOpacity>
                    </View>


                    <View style={style.container}>
                        <View style={style.BottomItem} >
                            <View>
                                <Text style={style.containerText1}>Enquiry Number</Text>
                                <Text style={style.containerText2}>51515</Text>
                            </View>
                            <View style={style.ItemName}>
                                <Text style={style.containerText1}>Enquiry Date</Text>
                                <Text style={[style.remarks]}>Paris Salenoicosidoisd</Text>
                            </View>
                        </View>

                        <View style={style.BottomItem} >
                            <View>
                                <Text style={style.containerText1}>Customer Name</Text>
                                <Text style={[style.containerText2]}>Vjayesiubdoieionzoid</Text>
                            </View>


                            <View>
                                <Text style={style.containerText1}>Description</Text>
                                <Text style={[style.remarks]}>sknsosdnosdncsdncjdjd</Text>
                            </View>

                        </View>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate("EnquiryDetail")} >
                        <View style={style.PlaceOrderButton}>
                            <Text style={style.PlaceOrderButtonText}>View Details</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={style.BottomBar} />
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default PostedEnquiryListCard