import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

export default function ListaDeSignos() {
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista signo="Aquário" dataInicio="21/01" dataFim="19/02" />
        <ItemLista signo="Peixes" dataInicio="20/02" dataFim="20/03" />
        <ItemLista signo="Áries" dataInicio="21/03" dataFim="20/04"/>
        <ItemLista signo="Touro" dataInicio="21/04" dataFim="21/05" />
        <ItemLista signo="Gêmeos" dataInicio=" 22/05" dataFim="21/06" />
        <ItemLista signo="Câncer" dataInicio="21/06" dataFim="23/07" />
        <ItemLista signo="Leão" dataInicio="24/07" dataFim="23/08" />
        <ItemLista signo="Virgem" dataInicio="24/08" dataFim="23/09" />
        <ItemLista signo="Libra" dataInicio="24/09" dataFim="23/10" />
        <ItemLista signo="Escorpião" dataInicio="24/10" dataFim="22/11" />
        <ItemLista signo="Sagitário" dataInicio="23/11" dataFim="21/12" />
        <ItemLista signo="Capricórnio" dataInicio="22/12" dataFim="20/01" />
      </ScrollView>
    </View>
  )
}