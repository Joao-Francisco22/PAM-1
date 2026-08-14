import React from 'react';
import { View } from 'react-native';
import Titulo from '../Titulo';
import Noticia from '../Noticia';

export default function TelaInicial() {
  return (
    <View style={{flex: 1}}>
      <Titulo />
      <Noticia />
    </View>
  )
}