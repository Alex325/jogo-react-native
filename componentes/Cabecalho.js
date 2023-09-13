import React from 'react'
// import './Cabecalho.css'
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = (props) => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.cabecalhoH1}>Jogo da Velha</Text>
            <Text style={styles.cabecalhoP}>Vez de Jogador: {props.vez}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        flex: 1,
        paddingBottom: 20
    },
    cabecalhoH1: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 20
    },
    cabecalhoP: {
        marginLeft: 10,
    },
});
export default Cabecalho