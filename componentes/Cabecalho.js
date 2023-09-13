import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Orientation } from '../App';

const Cabecalho = (props) => {

  const isLandscape = useContext(Orientation);

  return (
    <View style={[styles.cabecalho, { borderBottomWidth: isLandscape ? 0 : 1, borderRightWidth: isLandscape ? 1 : 0}]}>
      <Text style={[styles.cabecalhoH1, { marginTop: isLandscape ? 0 : 10, marginRight: isLandscape ? 10 : 0 }]}>Jogo da Velha</Text>
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