import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Tech () {
    return(
        <View style={styles.container}>
            <Text>Tech News!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});