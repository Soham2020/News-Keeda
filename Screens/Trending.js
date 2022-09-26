import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, FlatList, Image, Dimensions, Animated } from 'react-native';
import NewsCard from '../Shared/NewsCard';
import NewsApi from '../Api/NewsApi';

const {width} = Dimensions.get('screen')

export default function Trending ({ navigation }) {
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        getNews();
    }, [])
    
   
    const getNews = async(req, res) => {
        res = await NewsApi.get('articles')
        setNews(res.data);
    }
    const BG_IMG = 
    'https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

    return(
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <Image
                source={{ uri: BG_IMG }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={8}
            />
            <FlatList 
                data={news}
                horizontal
                pagingEnabled
                keyExtractor={( item, index ) => 'key' + index}
                renderItem={({ item }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center', width }}>
                            <NewsCard item={item} />
                        </View>
                    )
                }}
            />
        </View>
    )
}