import React from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { color } from '../assets/Colors/Colors'
import { style } from '../styles/PostedEnquiryScreenStyle'
import PostedEnquiryListCard from '../componants/PostedEnquiryListCard'
import { Fontisto, AntDesign } from '@expo/vector-icons'
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch } from '../store/Slices/EnquiryListPageSlice'


const PostedEnquiryScreen = () => {

    const dispatch = useDispatch()
    const showSearch = useSelector((state) => state.EnquiryListPageSlice.showSearch)

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={color.primary}
                color={color.white}
            />
            <View style={style.backgroundContainer} />

            {
                showSearch ?

                    <View style={style.headerParentContainer} >
                        <View style={style.HeaderContainer}>
                            <Text style={style.headerText}>Posted Enq. List</Text>
                        </View>
                        <TouchableOpacity
                            style={style.SearchIcon}
                            onPress={() => dispatch(toggleSearch())}
                        >
                            <View>
                                <Fontisto name="search" size={24} color={color.white} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    :

                    <View style={style.SearchBarConatainer}>
                        <Searchbar
                            style={style.searchBar}
                            placeholder="Search"

                            theme={{ colors: { primary: color.Black, secondary: color.Black, tertiary: color.Black, onSurfaceVariant: color.Black } }}
                            placeholderTextColor={color.Black}

                            iconColor={color.Black}
                            cursorColor={color.Black}
                        />
                        <TouchableOpacity
                            onPress={() => dispatch(toggleSearch())}
                        >
                            <View style={style.CloseButton}>
                                <AntDesign name="close" size={30} color={color.white} />
                            </View>
                        </TouchableOpacity>
                    </View>

            }




            <FlatList
                style={style.Container}
                data={[12, 12, 1, 1, 24]}
                keyExtractor={(itemValue) => itemValue.id}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
                initialNumToRender={10}
                renderItem={(item, index) => {
                    return (
                        <PostedEnquiryListCard key={index} />
                    )
                }}
            />

        </SafeAreaView>

    )
}

export default PostedEnquiryScreen