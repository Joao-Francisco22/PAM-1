import React from 'react';
import { View, Text, TextInput } from 'react-native';

function Campo() {
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput placeholder="Nome" />
    </View>
  );
}

export default Campo;