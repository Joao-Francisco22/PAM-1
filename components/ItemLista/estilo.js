import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
boxSigno: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
  nomeSigno: {
    fontSize: 18,
    color: '#204550',
    fontWeight: '600',
    marginBottom: 5
  },
  imagem: {
  width: 60,
  height: 60,
  resizeMode: 'contain',
  marginRight: 15,
},
});

export default estilo;