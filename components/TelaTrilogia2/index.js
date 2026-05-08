import { StyleSheet, Text, View } from 'react-native';

export default function TelaTrilogia2() {
  return (
    <View style={styles.container}>
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