import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ entradas, gastos }: { entradas: number, gastos: number }) {
  return (
      <MotiView
        style={styles.container}
        from={{
          rotateX: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 300,
        }}
      >
        <Text style={styles.label}>Entradas</Text>