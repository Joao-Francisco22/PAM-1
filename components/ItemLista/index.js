import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxSigno}>

      <Image
        source={{ uri: props.imagem }}
        style={estilo.imagem}
      />

      <View>
        <Text style={estilo.nomeSigno}>
          {props.signo}
        </Text>

        <Text>
          Data de fundação: {props.dataFundacao} - {props.numTitulos} títulos
        </Text>
      </View>

    </View>
  )
}