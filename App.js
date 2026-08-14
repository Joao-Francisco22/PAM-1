import React from 'react';
import ListaDeSignos from './components/ListaDeSignos';
import ListaDeSignosAuto from './components/ListaDeSignosAuto';

export default function App() {
  return (
    // Escolha qual componente você quer renderizar, ListaDeSignos ou ListaDeSignosAuto
    // É só comentar o que não quer usar e descomentar o que quer usar
    <ListaDeSignos />
    // <ListaDeSignosAuto />
  );
}