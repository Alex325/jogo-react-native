import React from 'react'
import Jogada from './Jogada'
// import './Rodape.css'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';

const Rodape = (props) => {
    const jogadas = props.historico.map(
        (jogada, ind) => <Jogada jogada={jogada} voltarJogada={() => props.voltarJogada(ind)} />
    )

    return (
        <View style={styles.rodape}>
            <Text style={styles.rodapeP}>Histórico de jogadas:</Text>
            <ScrollView contentContainerStyle={styles.historico}>{jogadas}</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
        margin: 10,
        borderTopWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        flexDirection: 'column',
        flex: 4,
        paddingTop: 20

    },
    rodapeP: {
        marginBottom: 10,
    },
    historico: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
export default Rodape;