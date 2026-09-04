import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Cabecalho from './components/Cabecalho';
import Sorteio from './components/Sorteio';
import Formulario from './components/Formulario';
import Placar from './components/Placar';
import ResultadoFinal from './components/ResultadoFinal';

import estilo from './css/estilos';

export default function App() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [numeroSorteado, setNumeroSorteado] = useState('?');
  const [ultimoNumero, setUltimoNumero] = useState('--');
  const [pontosRodada, setPontosRodada] = useState('--');
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('Escolha um número para começar.');
  const [erro, setErro] = useState('');

  function sortear() {
    if (numero == '') {
      setErro('Informe um número entre 0 e 99.');
      return;
    }

    const numeroEscolhido = Number(numero);

    const temVirgula = numeroEscolhido % 1 !== 0;
    const foraDoLimite = numeroEscolhido < 0 || numeroEscolhido > 99;

    if (temVirgula || foraDoLimite) {
      setErro('Use apenas números inteiros de 0 a 99.');
      return;
    }

    setErro('');

    const sorteado = Math.floor(Math.random() * 100);

    let diferenca = numeroEscolhido - sorteado;
    if (diferenca < 0) {
      diferenca = diferenca * -1;
    }

    const pontos = 100 - diferenca;
    const novaPontuacao = pontuacaoTotal + pontos;

    setNumeroSorteado(sorteado);
    setUltimoNumero(sorteado);
    setPontosRodada(pontos);
    setPontuacaoTotal(novaPontuacao);

    if (numeroEscolhido == sorteado) {
      setMensagem(`Acertou! Você fez ${pontos} pontos!`);
    } else {
      setMensagem(
        `Você escolheu: ${numeroEscolhido}. Número sorteado: ${sorteado}. Você fez ${pontos} pontos!`
      );
    }

    if (rodadaAtual == 5) {
      setFimDeJogo(true);
    } else {
      setRodadaAtual(rodadaAtual + 1);
      setNumero('');
    }
  }

  function mensagemFinal() {
    if (pontuacaoTotal == 500) return 'Perfeito! Você acertou todos!';
    if (pontuacaoTotal >= 400) return 'Quase perfeito!';
    if (pontuacaoTotal >= 300) return 'Excelente!';
    if (pontuacaoTotal >= 200) return 'Muito bem!';
    if (pontuacaoTotal >= 100) return 'Bom começo!';
    return 'Continue tentando!';
  }

  function reiniciar() {
    setRodadaAtual(1);
    setPontuacaoTotal(0);
    setNumero('');
    setNumeroSorteado('?');
    setUltimoNumero('--');
    setPontosRodada('--');
    setMensagem('Escolha um número para começar.');
    setErro('');
    setFimDeJogo(false);
  }

  return (
    <ScrollView contentContainerStyle={estilo.pagina}>
      <Cabecalho rodada={rodadaAtual} />

      <Sorteio
        numeroSorteado={numeroSorteado}
        ultimoNumero={ultimoNumero}
      />

      {!fimDeJogo && (
        <Formulario
          numero={numero}
          setNumero={setNumero}
          sortear={sortear}
          erro={erro}
        />
      )}

      <Placar
        pontosRodada={pontosRodada}
        pontuacaoTotal={pontuacaoTotal}
      />

      <ResultadoFinal
        mensagem={mensagem}
        fimDeJogo={fimDeJogo}
        pontuacaoTotal={pontuacaoTotal}
        mensagemFinal={mensagemFinal()}
        reiniciar={reiniciar}
      />
    </ScrollView>
  );
}