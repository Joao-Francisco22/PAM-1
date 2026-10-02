import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

const times = [
  {
    nomeTime: 'Corinthians',
    dataFundacao: '01/09/1910',
    numTitulos: '55',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabvBOzGI9NWRAbT58qUouyUCF09-3jBtW-xx8HpgtCw&s'
  },
  {
    nomeTime: 'Flamengo',
    dataFundacao: '17/11/1895',
    numTitulos: '68',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flamengo_braz_logo.svg?width=200'
  },
  {
    nomeTime: 'Palmeiras',
    dataFundacao: '26/08/1914',
    numTitulos: '73',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Palmeiras_logo.svg?width=200'
  },
  {
    nomeTime: 'São Paulo',
    dataFundacao: '25/01/1930',
    numTitulos: '41',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tvSZt2kQl_zUYqQ9Ld0mjsv2Xd5Ahm0YVIWyr5tLzA&s'
  },
  {
    nomeTime: 'Santos',
    dataFundacao: '14/04/1912',
    numTitulos: '46',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Santos_logo.svg?width=200'
  },
  {
    nomeTime: 'Real Madrid',
    dataFundacao: '06/03/1902',
    numTitulos: '105',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Real_Madrid_CF.svg?width=200'
  },
  {
    nomeTime: 'Bayern de Munique',
    dataFundacao: '27/02/1900',
    numTitulos: '86',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/FC_Bayern_München_logo_(2017).svg?width=200'
  },
  {
    nomeTime: 'Milan',
    dataFundacao: '16/12/1899',
    numTitulos: '50',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8vUKYA9UttFQYw5V3BauRMMXmLn30mJbJFq5VKgbgQ&s=10'
  },
  {
    nomeTime: 'Juventus',
    dataFundacao: '01/11/1897',
    numTitulos: '70',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhYPipUPazIrurJb6OCny1gs5W9RAcLTM3eTvziKx_w&s=10'
  },
  {
    nomeTime: 'Inter de Milão',
    dataFundacao: '09/03/1908',
    numTitulos: '46',
    imagem: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Inter_Mailand.svg?width=200'
  },
  {
    nomeTime: 'Barcelona',
    dataFundacao: '29/11/1899',
    numTitulos: '128',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvGaQNfOdZnYTW2wVtnrvfJb7m7RyAVYbxrCnm3P-gA&s=10'
  },
  {
    nomeTime: 'Liverpool',
    dataFundacao: '03/06/1892',
    numTitulos: '68',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xi3TIr8Lm38d9TVG90vONeQobDIoUZYTKYhCqv7MsQ&s=10'
  },
];

export default function ListaDeTime() {
  return (
    <View style={estilo.containerListaTimes}>

      <Titulo />

      <ScrollView style={estilo.listaTimes}>

        {times.map((time) => (
          <ItemLista
            key={time.nomeTime}
            nomeTime={time.nomeTime}
            dataFundacao={time.dataFundacao}
            numTitulos={time.numTitulos}
            imagem={time.imagem}
          />
        ))}

      </ScrollView>

    </View>
  );
}