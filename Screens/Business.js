import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import Card from '../Shared/Card';
import NewsApi from '../Api/NewsApi';
import config from '../Api/config';

export default function Business ({ navigation }) {

    const [ news, setNews ] = useState([]);
    useEffect(() => {
        getNews();
    }, [])
    
    const token = config.TOKEN
    
    const getNews = async(req, res) => {
        res = await NewsApi.get('top-headlines?country=in&apiKey=' + token)
        setNews(res.data);
    }
    
    const BG_IMG = 
    'https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

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