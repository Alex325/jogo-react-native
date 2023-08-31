import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

// import './Celula.css'
const Celula = (props) => {
    return (
        <TouchableHighlight style={styles.celula} onPress={props.onPress}>
            <Text>{props.valor}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    celula: {
        backgroundColor: '#ffffff',
        textAlign: 'center',
        color: '#000',
        fontSize: 2,
        border: 'solid 1 #000',
        height: 100,
        width: 100,
        justifyContent: 'center'
    }
});

export default Celula