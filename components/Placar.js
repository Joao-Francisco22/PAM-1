import React from 'react';
import { View, Text } from 'react-native';

import estilo from '../css/estilos';

export default function Placar(props) {

  return (

    <View style={estilo.placar}>

      <View style={estilo.pontoCard}>

        <Text style={estilo.textoCard}>
          Pontos da rodada
        </Text>

        <Text style={estilo.valorCard}>
          {props.pontosRodada}
        </Text>

      </View>


      <View style={estilo.pontoCard}>

        <Text style={estilo.textoCard}>
          Pontuação total
        </Text>

        <Text style={estilo.valorCard}>
          {props.pontuacaoTotal}

          <Text style={estilo.maximo}>
            / 500
          </Text>

        </Text>

      </View>

    </View>

  );

}