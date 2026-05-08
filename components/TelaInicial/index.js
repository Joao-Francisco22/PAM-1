import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from 'react-native';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>STAR WARS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#881111ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});