import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import estilo from '../css/estilos';

export default function ResultadoFinal(props) {

  return (

    <>

      <Text style={estilo.mensagem}>
        {props.mensagem}
      </Text>


      {props.fimDeJogo && (

        <View style={estilo.resultadoFinal}>

          <Text style={estilo.sobreTitulo}>
            PARTIDA CONCLUÍDA
          </Text>

          <Text style={estilo.fimJogo}>
            Fim de jogo!
          </Text>

          <Text style={estilo.pontuacaoFinal}>
            Pontuação final:
          </Text>

          <Text style={estilo.valorFinal}>
            {props.pontuacaoTotal} / 500
          </Text>

          <Text style={estilo.mensagemFinal}>
            {props.mensagemFinal}
          </Text>

          <TouchableOpacity
            style={estilo.botao}
            onPress={props.reiniciar}
          >

            <Text style={estilo.textoBotao}>
              Jogar Novamente
            </Text>

          </TouchableOpacity>

        </View>

      )}

    </>

  );

}