import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import estilo from '../css/estilos';

export default function Formulario(props) {

  return (

    <View style={estilo.formulario}>

      <Text style={estilo.label}>
        Qual número será sorteado?
      </Text>

      <TextInput
        style={estilo.input}
        value={props.numero}
        onChangeText={props.setNumero}
        placeholder="Digite um número de 0 a 99"
        keyboardType="numeric"
        maxLength={2}
      />

      <TouchableOpacity
        style={estilo.botao}
        onPress={props.sortear}
      >

        <Text style={estilo.textoBotao}>
          Sortear Número
        </Text>

      </TouchableOpacity>

      <Text style={estilo.erro}>
        {props.erro}
      </Text>

    </View>

  );

}