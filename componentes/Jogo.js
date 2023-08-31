import React, { useState } from 'react'
import Cabecalho from './Cabecalho'
import Celula from './Celula'
import Rodape from './Rodape'
import { View, ScrollView, Text, StyleSheet } from 'react-native';

// import './Jogo.css'
const Jogo = () => {

    const [vezJogador, setVezJogador] = useState('x')
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null))
    const [historicoJogadas, setHistoricoJogadas] = useState([])

    const handlePressCelula = (i) => {
        //Se a posição a ser jogada está vazia e não há um vencedor
        if (estadoTabuleiro[i] == null && fimJogo(estadoTabuleiro) == null) {
            let vez = vezJogador
            let jogada = [...estadoTabuleiro]
            let historico = [...historicoJogadas]

            jogada[i] = vez
            vez === 'x' ? vez = 'o' : vez = 'x'

            historico.push(jogada);

            //Verificando se após a jogada haverá um vencedor
            const vencedor = fimJogo(jogada);
            if (vencedor) {
                // alert(`Jogo acabou e o vencedor foi ${vencedor}`);
            }

            setVezJogador(vez)
            setEstadoTabuleiro(jogada)
            setHistoricoJogadas(historico)
        }
    }

    const voltarJogada = (ind) => {
        const vez = ind % 2 === 0 ? 'o' : 'x';
        const historico = historicoJogadas.slice(0, ind + 1);
        const tabuleiro = historicoJogadas[ind];
        setVezJogador(vez);
        setHistoricoJogadas(historico);
        setEstadoTabuleiro(tabuleiro);
    }

    const fimJogo = (tab) => {
        if (tab[0] && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0]
        if (tab[3] && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3]
        if (tab[6] && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6]
        if (tab[0] && tab[0] === tab[3] && tab[0] === tab[6]) return tab[0]
        if (tab[1] && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1]
        if (tab[2] && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2]
        if (tab[0] && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0]
        if (tab[2] && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2]
        return null
    }

    return (
        <ScrollView style={styles.jogo}>
            <Cabecalho vez={vezJogador} />
            <View style={styles.tabuleiro}>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[0]} onPress={() => handlePressCelula(0)} />
                    <Celula valor={estadoTabuleiro[1]} onPress={() => handlePressCelula(1)} />
                    <Celula valor={estadoTabuleiro[2]} onPress={() => handlePressCelula(2)} />
                </View>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[3]} onPress={() => handlePressCelula(3)} />
                    <Celula valor={estadoTabuleiro[4]} onPress={() => handlePressCelula(4)} />
                    <Celula valor={estadoTabuleiro[5]} onPress={() => handlePressCelula(5)} />
                </View>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[6]} onPress={() => handlePressCelula(6)} />
                    <Celula valor={estadoTabuleiro[7]} onPress={() => handlePressCelula(7)} />
                    <Celula valor={estadoTabuleiro[8]} onPress={() => handlePressCelula(8)} />
                </View>
            </View>
            <Rodape historico={historicoJogadas} voltarJogada={voltarJogada} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    jogo: {
        position: 'fixed',
        top: 10,
        right: 10,
        left: 10,
        bottom: 10,
        backgroundColor: '#eee',
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: 'column',
    },

    tabuleiro: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 3,

    },
    linhaTabuleiro: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default Jogo