import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

import NavigationBar from '@/components/NavigationBar'; // Certifique-se de que o caminho está correto

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Área principal para renderizar as telas */}
      <View style={styles.content}>
        <Slot />
      </View>

      {/* Barra de navegação personalizada */}
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // Ocupa o espaço restante da tela
    paddingBottom: 60, // Espaço reservado para a barra de navegação
  },
});



