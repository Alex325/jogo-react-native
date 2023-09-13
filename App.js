import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createContext } from 'react';
import { useWindowDimensions } from 'react-native';
import Jogo from './componentes/Jogo';

export const Orientation = createContext(false);

export default function App() {
  
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <Orientation.Provider value={isLandscape}>
      <Jogo />
    </Orientation.Provider>
  );
}

