import { View, Text, StyleSheet } from 'react-native';
// import './Jogada.css'
const Jogada = (props) => {
    const jogada = props.jogada;
    return (
        <View style={styles.jogada} onClick={props.voltarJogada}>
            <Text>{jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}</Text>
            <Text>{jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}</Text>
            <Text>{jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    jogada: {
        border: '1 solid #ddd',
        marginLeft: 15,
        flexDirection: 'column'
    }
});

export default Jogada;