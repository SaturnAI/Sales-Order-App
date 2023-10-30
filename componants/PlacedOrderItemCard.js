import React from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards';
import { style } from '../styles/PlacedOrderItemCardStyle';
import { color } from '../assets/Colors/Colors';

const PlacedOrderItemCard = ({ Customer_Name, Customer_Number, Item_Name, Quantity }) => {

    return (
        <SafeAreaView>
            <View style={style.PlacedCardContainer}>
                <Card>
                    <Text style={style.PlacedText}>Placed</Text>
                    <View style={style.container}>
                        <View style={style.BottomItem}  >
                            <View>
                                <Text style={style.containerText1}>Customer Number</Text>
                                <Text style={style.containerText2}>{Customer_Number}</Text>
                            </View>
                            <View>
                                <Text style={style.containerText1}>Item Name</Text>
                                <Text style={[style.remarks]}>{Item_Name}</Text>
                            </View>

                        </View>

                        <View style={style.BottomItem} >
                            <Text style={style.containerText1}>Customer Name</Text>
                            <Text style={[style.containerText2]}>{Customer_Name}</Text>

                            <View style={style.PlusMinusAndQuantText}>

                                <View>
                                    <Text style={style.containerText1}>Quantity</Text>
                                    <Text style={[style.remarks]}>{Quantity}</Text>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style={style.BottomBar} />
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default PlacedOrderItemCard
