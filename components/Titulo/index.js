import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function Titulo() {
  return (
    <View style={estilo.caixaTitulo}>
      <Text style={estilo.textoTitulo}>
        Lista de Times
      </Text>
    </View>
  );
}