import React from 'react'
import Jogada from './Jogada'
// import './Rodape.css'
import { View, Text, StyleSheet } from 'react-native';

const Rodape = (props) => {
    const jogadas = props.historico.map(
        (jogada, ind) => <Jogada jogada={jogada} voltarJogada={() => props.voltarJogada(ind)} />
    )

    return (
        <View style={styles.rodape}>
            <Text style={styles.rodapeP}>Histórico de jogadas:</Text>
            <View style={styles.historico}>{jogadas}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
        margin: 10,
        borderTop: 'solid 1 #000',
        flex: 2,
        flexDirection: 'row'
    },
    rodapeP: {
        marginLeft: 10,
    },
    historico: {
        flexDirection: 'row'
    }
});
export default Rodape;