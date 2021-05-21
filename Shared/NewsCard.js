// Card for Trending section
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function NewsCard () {
    return(
        <View style={styles.cardView}>
            <Text style={styles.title}>
                Prince Harry tells Oprah that Diana's death led him to drink and drugs, accuses royals of 'total neglect' - NBC News
            </Text>
            <Text style={styles.author}>
                Adela Suliman
            </Text>
            <Image style={styles.image} source={{ uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_20/3476561/210521-prince-harry-oprah-mc-820.JPG", }} />
            <Text style={styles.description}>
                Prince Harry has accused the British royal family of \"total neglect\" and revealed he turned to drink and drugs years after the death of his mother, Princess Diana.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginTop: width * 0.14,
        marginHorizontal: width * 0.1,
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'gray',
        fontSize: 18,
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.04,
        marginRight: width * 0.04,
        marginVertical: height * 0.02,
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray',
    },
})