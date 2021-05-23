import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import Card from '../Shared/Card';
import NewsApi from '../Api/NewsApi'; 
import config from '../Api/config';

export default function Tech ({ navigation }) {
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        getNews();
    }, [])

    const token = config.TOKEN;

    
    const getNews = async(req, res) => {
        res = await NewsApi.get('everything?domains=techcrunch.com,thenextweb.com&language=en&apiKey=' + token)
        setNews(res.data);
    }
    
    const BG_IMG = 
    'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=520';
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
