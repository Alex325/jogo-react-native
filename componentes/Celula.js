import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Celula = (props) => {
  return (
    <TouchableHighlight style={styles.celula} onPress={props.onPress}>
      <Text style={styles.textCelula}>{props.valor}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  celula: {
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyCenter: 'center'
  },
  textCelula: {
    fontSize: 80,
    textAlign: 'center',
    color: '#000',
  }
});

export default Celula