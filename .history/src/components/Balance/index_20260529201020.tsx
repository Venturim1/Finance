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
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.income}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entradas)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(gastos)}</Text>
        </View>
      </View>

    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 4,
    paddingEnd: 4,
    marginTop: -24,
    marginStart: 14,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  currencySymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00',
  },

  income: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff00',
  },

  expenses: {
    color: '#ff0000',
  },
})


