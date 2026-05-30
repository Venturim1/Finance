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
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 800,
        delay: 300,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Entradas</Text>
        <View style{styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.income}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entradas)}</Text>
        </View>
      </View>
    </MotiView>
  );
}


