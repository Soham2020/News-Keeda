// Card for Bitcoin, Business and Tech
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Card ({ item }) {
    return(
        <View style={styles.cardView}>
            <TouchableOpacity onPress={() => Linking.openURL( item.url )}>
                <Text style={styles.title}>
                    { item.title } 
                </Text>
                <Text style={styles.author}>
                    { item.newsSite }
                </Text>
                <Image style={styles.image} source={item.imageUrl ? {uri: item.imageUrl } : null} />
                <Text style={styles.description}>
                    { item.summary }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 14,
        opacity: 0.8
    },
    image: {
        height: height / 3,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
        borderRadius: 16,
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 12,
        color: 'gray',
        opacity: 0.7,
        color: '#0099cc',
    }
})