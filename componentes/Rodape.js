import React, { useContext } from 'react'
import Jogada from './Jogada'
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Orientation } from '../App';

const Rodape = (props) => {

  const isLandscape = useContext(Orientation);

  const jogadas = props.historico.map(
    (jogada, ind) => <Jogada jogada={jogada} key={ind} voltarJogada={() => props.voltarJogada(ind)} />
  )

  return (
    <View style={[styles.rodape, { borderTopWidth: isLandscape ? 0 : 1, borderLeftWidth: isLandscape ? 1 : 0}]}>
      <Text style={[styles.rodapeP, { marginBottom: isLandscape ? 0 : 10, marginLeft: isLandscape ? 10 : 0}]}>Histórico de jogadas:</Text>
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
    flex: 1,
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