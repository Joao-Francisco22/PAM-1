import React from 'react';
import { View } from 'react-native';

import Cabecalho from './cabecalho';
import Botao from './botao';
import Campo from './campo';

export default function App() {
  return (
    <View>
      <Cabecalho />
      <Campo />
      <Botao />
    </View>
  );
}