import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo/index.js';
import ItemLista from '../ItemLista/index.js';
import estilo from './estilo.js';

export default function ListaDeSignosAuto() {
  const signos = [
    { signo: 'Aquário', dataInicio: '21/01', dataFim: '19/02' },
    { signo: 'Peixes', dataInicio: '20/02', dataFim: '20/03' },
    { signo: 'Áries', dataInicio: '21/03', dataFim: '20/04' },
    { signo: 'Touro', dataInicio: '21/04', dataFim: '21/05' },
    { signo: 'Gêmeos', dataInicio: '22/05', dataFim: '21/06' },
    { signo: 'Câncer', dataInicio: '21/06', dataFim: '23/07' },
    { signo: 'Leão', dataInicio: '24/07', dataFim: '23/08' },
    { signo: 'Virgem', dataInicio: '24/08', dataFim: '23/09' },
    { signo: 'Libra', dataInicio: '24/09', dataFim: '23/10' },
    { signo: 'Escorpião', dataInicio: '24/10', dataFim: '22/11' },
    { signo: 'Sagitário', dataInicio: '23/11', dataFim: '21/12' },
    { signo: 'Capricórnio', dataInicio: '22/12', dataFim: '20/01' },
  ];
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        {signos.map((signo, index) => (
          <ItemLista
            key={index}
            signo={signo.signo}
            dataInicio={signo.dataInicio}
            dataFim={signo.dataFim}
          />
        ))}
      </ScrollView>
    </View>
  )
}