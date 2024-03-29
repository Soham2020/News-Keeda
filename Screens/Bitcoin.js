import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Card from '../Shared/Card';
import NewsApi from '../Api/NewsApi';

export default function Bitcoin ({ navigation }) {
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        getNews();
    }, [])

    // const token = "a71495ed027641fd900a168e220112f7";
    
    const getNews = async(req, res) => {
        res = await NewsApi.get('blogs')
        setNews(res.data);
    }
    
    const BG_IMG = 
    'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

    return(
        <View>
            <Image
                source={{ uri: BG_IMG }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={8}
            />
            <FlatList 
                data={news.articles}
                keyExtractor={( item, index ) => 'key' + index}
                contentContainerStyle={{
                    padding: 10,
                    paddingTop: 12,
                }}
                renderItem={({ item }) => {
                    return (
                        <Card item={item} />
                    )
                }}
            />
        </View>
    )
}
