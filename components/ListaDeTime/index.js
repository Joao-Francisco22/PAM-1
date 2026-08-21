import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

const times = [
  { signo: 'Corinthians', dataFundacao: '01/09/1910', numTitulos: '55', imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Corinthians_logo.svg' },
  { signo: 'Flamengo', dataFundacao: '17/11/1895', numTitulos: '68', imagem: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Flamengo_logo.svg' },
  { signo: 'Palmeiras', dataFundacao: '26/08/1914', numTitulos: '73', imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/63/SE_Palmeiras_logo.svg' },
  { signo: 'São Paulo', dataFundacao: '25/01/1930', numTitulos: '41', imagem: 'https://upload.wikimedia.org/wikipedia/en/0/07/Sao_Paulo_FC_logo.svg' },
  { signo: 'Santos', dataFundacao: '14/04/1912', numTitulos: '46', imagem: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Santos_FC_logo.svg' },
  { signo: 'Real Madrid', dataFundacao: '06/03/1902', numTitulos: '105', imagem: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
  { signo: 'Bayern de Munique', dataFundacao: '27/02/1900', numTitulos: '86', imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg' },
  { signo: 'Milan', dataFundacao: '16/12/1899', numTitulos: '50', imagem: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/AC_Milan_logo.svg' },
  { signo: 'Juventus', dataFundacao: '01/11/1897', numTitulos: '70', imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Juventus_Logo.svg' },
  { signo: 'Inter de Milão', dataFundacao: '09/03/1908', numTitulos: '46', imagem: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Inter_Mailand.svg' },
  { signo: 'Barcelona', dataFundacao: '29/11/1899', numTitulos: '128', imagem: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
  { signo: 'Liverpool', dataFundacao: '03/06/1892', numTitulos: '68', imagem: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Liverpool_FC.svg' },
];

export default function ListaDeTime() {
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        {times.map((time) => (
          <ItemLista
            key={time.signo}
            signo={time.signo}
            dataFundacao={time.dataFundacao}
            numTitulos={time.numTitulos}
            imagem={{ uri: time.imagem }}
          />
        ))}
      </ScrollView>
    </View>
  );
}