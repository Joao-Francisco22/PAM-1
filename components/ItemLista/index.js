import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxTime}>

      <Image
        source={{ uri: props.imagem }}
        style={estilo.imagemTime}
        resizeMode="contain"
      />

      <View style={{ flex: 1 }}>
        <Text style={estilo.nomeTime}>
          {props.nomeTime}
        </Text>

        <Text>
          Data de fundação: {props.dataFundacao} - {props.numTitulos} títulos
        </Text>
      </View>

    </View>
  );
}