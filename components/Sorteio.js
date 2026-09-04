import React from 'react';
import { View, Text } from 'react-native';

import estilo from '../css/estilos';

export default function Sorteio(props) {

  return (

    <View style={estilo.areaSorteio}>

      <View style={estilo.visorNumero}>

        <Text style={estilo.rotuloVisor}>
          Número sorteado
        </Text>

        <Text style={estilo.numeroSorteado}>
          {props.numeroSorteado}
        </Text>

      </View>

      <Text style={estilo.ultimoNumero}>
        Último número sorteado: {props.ultimoNumero}
      </Text>

    </View>

  );

}