import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxSigno}>
      <Text style={estilo.nomeSigno}>
        {props.signo}
      </Text>
      
      <Text>
        Nascidos entre: {props.dataInicio} - {props.dataFim}
      </Text>
    </View>
  )
}
