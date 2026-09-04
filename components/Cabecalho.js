import React from 'react';
import { View, Text } from 'react-native';

import estilo from '../css/estilos';

export default function Cabecalho(props) {

  return (

    <View style={estilo.cabecalho}>

      <Text style={estilo.titulo}>
        Jogo dos Números
      </Text>

      <Text style={estilo.rodada}>
        Rodada {props.rodada} de 5
      </Text>

    </View>

  );

}