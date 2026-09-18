import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({

  pagina: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#9ce4e0'
  },


  cabecalho: {
    alignItems: 'center'
  },


  titulo: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#a9e39d',
    color: '#1a4310',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
    borderRadius: 60,
    bordercolor: 'black',
    borderWidth: 2
  },


  rodada: {
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#d9f3ed',
    borderRadius: 20,
    color: '#102a43',
    fontWeight: 'bold',
    bordercolor: 'black',
    borderWidth: 1
  },


  areaSorteio: {
    alignItems: 'center',
    marginVertical: 30
  },


  visorNumero: {
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b7046',
    borderWidth: 9,
    borderColor: '#000000',
    borderRadius: 110
  },


  rotuloVisor: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold'
  },


  numeroSorteado: {
    marginTop: 3,
    color: '#ffffff',
    fontSize: 80,
    fontWeight: 'bold'
  },


  ultimoNumero: {
    marginTop: 26,
    color: '#9ce4e0',
    fontSize: 15
  },


  formulario: {
    marginTop: 12
  },


  label: {
    marginBottom: 10,
    color: '#18334c',
    fontWeight: 'bold',
    fontSize: 16
  },


  input: {
    width: '100%',
    padding: 14,
    color: '#18334c',
    borderWidth: 2,
    borderColor: '#0caf91',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16
  },


  botao: {
    marginTop: 10,
    padding: 14,
    alignItems: 'center',
    backgroundColor: '#17dbc8',
    borderRadius: 5,
    borderBottomWidth: 4,
    borderBottomColor: '#2cc9b4dc',
  
  },


  textoBotao: {
    color: '#102a43',
    fontWeight: 'bold',
    fontSize: 16
  },


  erro: {
    minHeight: 25,
    marginTop: 11,
    color: '#b33b2e',
    textAlign: 'center',
    fontSize: 14
  },


  placar: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28
  },


  pontoCard: {
    flex: 1,
    padding: 18,
    backgroundColor: '#9ad4c5',
    borderLeftWidth: 5,
    borderLeftColor: '#2cc9b4'
  },


  textoCard: {
    color: '#547085',
    fontSize: 12,
    fontWeight: 'bold'
  },


  valorCard: {
    marginTop: 5,
    color: '#102a43',
    fontSize: 32,
    fontWeight: 'bold'
  },


  maximo: {
    fontSize: 15
  },


  mensagem: {
    minHeight: 40,
    marginTop: 11,
    color: '#102a43',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },


  resultadoFinal: {
    marginTop: 28,
    padding: 27,
    backgroundColor: '#102a43',
    borderRadius: 6,
    alignItems: 'center'
  },


  sobreTitulo: {
    color: '#9de3d8',
    fontSize: 12,
    fontWeight: 'bold'
  },


  fimJogo: {
    marginTop: 8,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  },


  pontuacaoFinal: {
    marginTop: 17,
    color: '#dcecf2',
    fontSize: 16
  },


  valorFinal: {
    marginTop: 4,
    color: '#2cc9b4',
    fontSize: 36,
    fontWeight: 'bold'
  },


  mensagemFinal: {
    marginVertical: 15,
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

export default estilo;