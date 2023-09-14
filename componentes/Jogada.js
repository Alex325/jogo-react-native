import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Jogada = (props) => {
  const jogada = props.jogada;

  return (
    <TouchableHighlight style={styles.jogada} onPress={props.voltarJogada}>
      <View>
        <View style={styles.jogadaLinha}>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[0]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[1]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[2]}</Text>
          </View>
        </View>
        <View style={styles.jogadaLinha}>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[3]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[4]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[5]}</Text>
          </View>
        </View>
        <View style={styles.jogadaLinha}>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[6]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[7]}</Text>
          </View>
          <View style={styles.jogadaCelula}>
            <Text>{jogada[8]}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  jogada: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    flexDirection: 'column',
    margin: 5,
  },
  jogadaCelula: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    width: 20,
    aspectRatio: 1
  },
  jogadaLinha: {
    flexDirection: 'row'
  },
  jogadaText: {

  }
});

export default Jogada;